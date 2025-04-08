import { FC, useEffect, useState } from 'react'

interface DuneTableProps {
  queryId: string
  theme?: 'light' | 'dark'
}

interface DuneData {
  result: {
    rows: any[]
    metadata: {
      column_names: string[]
    }
  }
}

const formatCurrency = (value: number | string) => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)
}

const DuneTable: FC<DuneTableProps> = ({ queryId, theme = 'light' }) => {
  const [data, setData] = useState<DuneData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

    const fetchData = async () => {
      try {
        // Check cache first
        const cacheKey = `dune-table-${queryId}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const age = Date.now() - timestamp;
          
          if (age < CACHE_DURATION) {
            setData(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data if cache miss or expired
        const response = await fetch(`https://api.dune.com/api/v1/query/${queryId}/results`, {
          headers: {
            'x-dune-api-key': import.meta.env.VITE_DUNE_API_KEY || '',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch cached results')
        }

        const result = await response.json()
        
        // Update cache
        localStorage.setItem(cacheKey, JSON.stringify({
          data: result,
          timestamp: Date.now()
        }));

        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [queryId])

  const formatCellValue = (column: string, value: any) => {
    if (['vesting_value', 'vested_value', 'total_value'].includes(column)) {
      return formatCurrency(value)
    }
    return value
  }

  const getColumnWidth = (column: string, isLastColumn: boolean) => {
    const columnLower = column.toLowerCase()
    if (isLastColumn) {
      return 'w-full min-w-[120px]'
    }
    switch (columnLower) {
      case 'donor_name':
        return 'w-[160px] min-w-[160px] max-w-[160px] truncate'
      case 'n':
        return 'w-[50px] min-w-[50px] max-w-[50px]'
      case '1%':
        return 'w-[40px] min-w-[40px] max-w-[40px]'
      default:
        return 'w-[120px] min-w-[120px]'
    }
  }

  const getCellClass = (column: string, isLastColumn: boolean) => {
    const baseClass = theme === 'dark' 
      ? "py-3 px-4 text-sm text-gray-300 whitespace-nowrap group-hover:text-white"
      : "py-3 px-4 text-sm text-gray-600 whitespace-nowrap group-hover:text-gray-900"
    if (column === 'donor_name') {
      return `${baseClass} truncate`
    }
    if (isLastColumn) {
      return `${baseClass} text-right`
    }
    return baseClass
  }

  const formatColumnName = (column: string) => {
    if (column.toLowerCase() === 'n') return 'Rank'
    return column.replace(/_/g, ' ')
  }

  if (loading) return (
    <div className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-gray-200 to-gray-300'} h-[600px] animate-pulse`} />
  )
  if (error) return (
    <div className={`text-sm ${theme === 'dark' ? 'text-red-400 bg-red-900/20 border-red-800' : 'text-red-500 bg-red-50 border-red-200'} rounded-lg p-4 border`}>
      Error: {error}
    </div>
  )
  if (!data?.result) return null

  // Limit to first 25 rows and filter out vesting_value column
  const rows = data.result.rows.slice(0, 25)
  const visibleColumns = data.result.metadata.column_names.filter(col => col !== 'vesting_value')

  return (
    <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm overflow-hidden`}>
      <div className="max-h-[600px] overflow-auto relative scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-[#222222]">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            {visibleColumns.map((column, index) => (
              <col key={index} className={getColumnWidth(column, index === visibleColumns.length - 1)} />
            ))}
          </colgroup>
          <thead>
            <tr className={`border-b ${theme === 'dark' ? 'border-[var(--gray-darker)]' : 'border-gray-200'}`}>
              {visibleColumns.map((column, index) => (
                <th 
                  key={index}
                  className={`py-3 px-4 text-[11px] font-mono font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider whitespace-nowrap sticky top-0 ${theme === 'dark' ? 'bg-[#222222]' : 'bg-white'} ${getColumnWidth(column, index === visibleColumns.length - 1)} ${index === visibleColumns.length - 1 ? 'text-right' : 'text-left'}`}
                >
                  {formatColumnName(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y ${theme === 'dark' ? 'divide-[var(--gray-darker)]' : 'divide-gray-100'}`}>
            {rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`group transition-colors cursor-default ${theme === 'dark' ? 'hover:bg-[var(--gray-darker)]/50' : 'hover:bg-gray-50'}`}
              >
                {visibleColumns.map((column, colIndex) => (
                  <td 
                    key={colIndex}
                    className={getCellClass(column, colIndex === visibleColumns.length - 1)}
                    title={column === 'donor_name' ? row[column] : undefined}
                  >
                    {formatCellValue(column, row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DuneTable 