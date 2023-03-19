const path = require("path");
const {writeFile} = require("fs/promises");
const fetch = require("node-fetch");

(async () => {
    const fetchData = await fetch("https://api.github.com/users/Kuuuuuuuu");
    const json = await fetchData.json();
    const text = `
<h3><b>Hi there, I'm Kuuuuuuuu</b></h3>
<h4>👋 Welcome to my profile!</h4>
<h4>👀 I'm Student, Developer and Gamer</h4>

<h4>📫 Email: <a href="mailto:me@nayukikuu.xyz">me@nayukikuu.xyz</a></h4>
<hr/>
<a href="https://nayukikuu.xyz">
    <img alt="count" src="https://komarev.com/ghpvc/?username=MelidaZ&style=for-the-badge"/>
</a>
<br/>
<br/>
<a href="https://nayukikuu.xyz">
    <img alt="lanyard" src="https://lanyard.cnrad.dev/api/568093374662311956"/>
</a>
<br/>
<a href="https://wakatime.com/@f0797c6d-4099-4a7f-947c-a8144dcd6348">
    <img alt="wakatime" src="https://wakatime.com/badge/user/f0797c6d-4099-4a7f-947c-a8144dcd6348.svg"/>
</a>
<br/>
<br/>
<h4>My GitHub Stats</h4>
<ul>
    <li>Followers: ${json.followers ?? "0"}</li>
    <li>Following: ${json.following ?? "0"}</li>
    <li>Public Repo: ${json.public_repos ?? "0"}</li>
</ul>
<h4>My Programming Skills</h4>
<ul>
    <li>Programming Languages: JavaScript, TypeScript, PHP, Java, C#</li>
    <li>Frameworks: React.js, Node.js, Discord.js, Bootstrap, WindiCSS, TailwindCSS</li>
    <li>Tools: Git, Docker</li>
    <li>IDEs: Intellj IDEA, PHPStorm, Android Studio, Rider</li>
    <li>Etc: Cloudflare, Vercel, Railway, AWS, Pocketmine-MP, Nukkit, Spigot</li>
    <li>Currently Learning: Elixir, C++, Flutter, Next.js</li>
</ul>
<br/>
<details>
    <summary>More Info!</summary>
    <br/>
    <br/>
    <a href="https://nayukikuu.xyz">
        <div align="center">
            <img alt="github" src="https://github-readme-stats.vercel.app/api?username=Kuuuuuuuu&show_icons=true&include_all_commits=true&line_height=28.5&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
            <br/>
            <img alt="github" src="https://github-readme-stats.vercel.app/api/top-langs?username=Kuuuuuuuu&langs_count=15&layout=compact&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
            <br/>
            <img alt="trophy" src="https://github-profile-trophy.vercel.app/?username=Kuuuuuuuu&row=2&column=4&theme=algolia"/>
            <br/>
            <img alt="streak" src="https://github-readme-streak-stats.herokuapp.com/?user=Kuuuuuuuu&theme=dark&background=191970"/>
            <br/>
            <img alt="activity" src="https://github-readme-activity-graph.cyclic.app/graph?username=Kuuuuuuuu&bg_color=191970&theme=github"/>
            <br/>
            <img alt="repo" src="https://github-contributor-stats.vercel.app/api?username=Kuuuuuuuu&show_icons=true&include_all_commits=true&line_height=28.5&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
        </div>    
    </a>
</details>`;
    await writeFile(path.join(__dirname, "README.md"), text);
})();
