import React from 'react';
import DuneLogo from 'src/assets/images/Dune.png';
import TwitterLogo from 'src/assets/images/Twitter.png';
import WarpcastLogo from 'src/assets/images/Warpcast.png';
import DiscordLogo from 'src/assets/images/Discord.png';
import GithubLogo from 'src/assets/images/Github.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--brand-primary)] pt-16 pb-8">
      <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-between w-full">
        <div className="flex flex-row gap-6 md:gap-8 items-center">
          <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer">
            <img src={DuneLogo} alt="Dune" className="h-8 w-auto" />
          </a>
          <a href="https://x.com/ProtocolGuild" target="_blank" rel="noopener noreferrer">
            <img src={TwitterLogo} alt="Twitter" className="h-8 w-auto" />
          </a>
          <a href="https://warpcast.com/protocolguild" target="_blank" rel="noopener noreferrer">
            <img src={WarpcastLogo} alt="Warpcast" className="h-8 w-auto" />
          </a>
          <a href="https://discord.gg/54JUcFSJ7u" target="_blank" rel="noopener noreferrer">
            <img src={DiscordLogo} alt="Discord" className="h-8 w-auto" />
          </a>
          <a href="https://github.com/protocolguild/protocol-guild-site" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github" className="h-8 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
