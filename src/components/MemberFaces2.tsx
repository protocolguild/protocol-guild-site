import { FC, useState, useEffect } from 'react'
import styles from './MemberFaces.module.css'
import { members } from '../content/members'

interface MemberFacesProps {}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemberFaces: FC<MemberFacesProps> = () => {
  const [shuffledMembers, setShuffledMembers] = useState(members);

  useEffect(() => {
    setShuffledMembers(shuffleArray(members));
  }, []);

  const quarterLength = Math.ceil(shuffledMembers.length / 4);
  const firstQuarter = shuffledMembers.slice(0, quarterLength);
  const secondQuarter = shuffledMembers.slice(quarterLength, quarterLength * 2);
  const thirdQuarter = shuffledMembers.slice(quarterLength * 2, quarterLength * 3);
  const fourthQuarter = shuffledMembers.slice(quarterLength * 3);

  return (
    <div className="relative w-full h-auto overflow-hidden flex flex-col gap-2 group mt-3">
      {[firstQuarter, secondQuarter, thirdQuarter, fourthQuarter].map((quarter, rowIndex) => (
        <div key={`row-${rowIndex}`} className="relative h-[32px] overflow-hidden flex items-center">
          <div className="absolute h-full left-0 bg-gradient-to-r from-[var(--white)] via-[var(--white)] via-[20%] via-opacity-100 to-opacity-0 z-10 pointer-events-none w-[10%]" />
          <div className="absolute h-full right-0 bg-gradient-to-l from-[var(--white)] via-[var(--white)] via-[20%] via-opacity-100 to-opacity-0 z-10 pointer-events-none w-[10%]" />
          <div className={`flex whitespace-nowrap min-w-max ${rowIndex % 2 === 0 ? styles.scroll : styles['scroll-reverse']} group-hover:animate-pause`}>
            {quarter.map((member, index) => (
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${member.name}-${index}-row-${rowIndex}`}
                className="inline-flex items-center mx-2 pl-1 pr-2 py-1 bg-[var(--gray-lightest)] rounded-full hover:bg-opacity-80 transition-all"
              >
                <img
                  src={member.pfp}
                  alt={member.name}
                  className="h-[24px] w-[24px] rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="ml-2 text-sm text-[var(--gray-dark)]">{member.username}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MemberFaces
