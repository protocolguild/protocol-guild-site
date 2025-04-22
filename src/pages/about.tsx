        <Section background="white" divider="var(--brand-primary)" line={true}>
          <Section.Row align="start">
            <Grid columns={12} className="py-16">
              <Grid.Item span={6} className="flex flex-col gap-4">
                <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">{aboutContent.organization.title}</h2>
                <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.organization.description}</h2>
                <a href="https://calendly.com/vecchiarelli-peter/30min" target="_blank" rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline">Schedule Call</a>
              </Grid.Item>
              <Grid.Item span={6} className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">{aboutContent.organization.team.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-start">
                      <img src={trentImg} alt="Trent Van Epps" className="w-full aspect-square object-cover" />
                      <div className="mt-2 flex items-start justify-between w-full gap-2">
                        <p className="text-sm">Trent Van Epps</p>
                        <a href="https://x.com/trent_vanepps" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@trent_vanepps
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        <p className="text-xs">Strategy, fundraising, internal gov.</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <img src={cheekyImg} alt="Cheeky Gorilla" className="w-full aspect-square object-cover" />
                      <div className="mt-2 flex items-start justify-between w-full gap-2">
                        <p className="text-sm">Cheeky Gorilla</p>
                        <a href="https://x.com/cheekygorilla0x" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@cheekygorilla0x
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        <p className="text-xs">Internal ops, foundation, fundraising</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <img src={peterImg} alt="Peter Vecchiarelli" className="w-full aspect-square object-cover" />
                      <div className="mt-2 flex items-start justify-between w-full gap-2">
                        <p className="text-sm">Peter Vecchiarelli</p>
                        <a href="https://x.com/AlphaLemonade" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@AlphaLemonade
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        <p className="text-xs">Fundraising, comms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
