const banner_help = `
██╗  ██╗███████╗██╗     ██████╗ 
██║  ██║██╔════╝██║     ██╔══██╗
███████║█████╗  ██║     ██████╔╝
██╔══██║██╔══╝  ██║     ██╔═══╝ 
██║  ██║███████╗███████╗██║     
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                    
`;
const project_banner=`
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝                                                                  
`
const date_started = 1697291453512
let millis=Date.now()-date_started;
let seconds = Math.floor( millis/ 1000)
let minutes = Math.floor(seconds/60)
let hours=Math.floor(minutes/60)
let days=Math.floor(hours/24)
seconds-=minutes*60
minutes-=hours*60
hours-=days*24
const links_banner=`
██╗     ██╗███╗   ██╗██╗  ██╗███████╗
██║     ██║████╗  ██║██║ ██╔╝██╔════╝
██║     ██║██╔██╗ ██║█████╔╝ ███████╗
██║     ██║██║╚██╗██║██╔═██╗ ╚════██║
███████╗██║██║ ╚████║██║  ██╗███████║
╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝`
const about_banner = `
██╗  ██╗██╗  ██╗███████╗██████╗ 
██║  ██║██║  ██║╚══███╔╝╚════██╗
███████║███████║  ███╔╝  █████╔╝
██╔══██║╚════██║ ███╔╝   ╚═══██╗
██║  ██║     ██║███████╗██████╔╝
╚═╝  ╚═╝     ╚═╝╚══════╝╚═════╝                          
`;
const date_banner = `
██████╗  █████╗ ████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ██║███████║   ██║   █████╗  
██║  ██║██╔══██║   ██║   ██╔══╝  
██████╔╝██║  ██║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                               
`;

const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#8080ff",
    maincolor: "#8080ff",
    greenblue: "#0CBAA6",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700w,top=10,height=400,width=600"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

async function typeSentence(sentence, eleRef, delay = 100,rand=0) {
  const letters = sentence.split("");
  let i = 0;
  delay+=Math.random()*rand
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return (letters.length*100);
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">sudo</span> => command allows Linux users to have temporary access to sensitive areas of the system
        <br>
        <span class="cmd">about</span> => my info
        <br>
        <span class="cmd">go [name]</span> => use to open url (try:<span style="color:#63b5cf;" >go list</span>)
        <br>
        <span class="cmd">projects [name]</span> => use to open one of my projects (try:<span style="color:#63b5cf;">project list</span>)
        <br>
        <span class="cmd">ping</span> => use to check your internet connection
        <br> 
        <span class="cmd">pwd</span> => use to check your path
        <br> 
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:#63b5cf;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("maincolor", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    projects: function(name) {
      let project_banner_=project_banner
      let projects= [
        {"lang":"JavaScript","name":"Test","link":"example.com","alias":"test","banner":`
        ██████╗███████╗ ██████╗  ██████╗ ███╗   ██╗
        ██╔════╝██╔════╝██╔═══██╗██╔═══██╗████╗  ██║
        ██║     ███████╗██║   ██║██║   ██║██╔██╗ ██║
        ██║     ╚════██║██║   ██║██║   ██║██║╚██╗██║
        ╚██████╗███████║╚██████╔╝╚██████╔╝██║ ╚████║
         ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝
        `,"desc":`example`,"devs":"@imh4z3"},
      ]
      let project_aliases=["test"]
      let i=0
      let project_text=""
      if (name=="list") {
        while (i<projects.length) {
          project_text+=`
          <br>
          <span style="color:#ff9933;">[${projects[i]["lang"]}]  </span><span>${projects[i]["name"]}  </span> <span style="color:#63b5cf;">  (try: project ${projects[i]["alias"]})</span>
          <br>
          `;
          i++;
        } 
      } else if (project_aliases.includes(name)) {
          for (let i = 0; i < project_aliases.length; i++) {
            if (name==projects[i]["alias"]) {
              let value1 = Math.floor(Math.random()*1000);
              project_banner_=projects[i]["banner"]
              project_text+=`
              <br>
              <div class="desc"><span style="color:#a320ce;">[Description]  </span> <span id="desc${value1}"></span></div>
              <br>
              <span style="color:#ff9933;">[Language]  </span><span id="lang${value1}"></span>
              <br>
              <br>
              <span style="color:#98fb98">[Developers]  </span><span id="dev${value1}"></span>
              <br>
              <br>
              <span style="color:#F0E68C">[Github]  </span><a style="color:55f;" href="${projects[i]["link"]}" id="link${value1}"></a>
              `
              typeSentence(projects[i]["desc"], "#desc"+value1.toString(),delay=25,rand=100);
              typeSentence(projects[i]["lang"], "#lang"+value1.toString(),delay=25,rand=100);
              typeSentence(projects[i]["devs"], "#dev"+value1.toString(),delay=25,rand=100);
              typeSentence(projects[i]["link"], "#link"+value1.toString(),delay=25,rand=100);
              break;
            }
          }
      }
        const banner = `${color("blue", project_banner_)}`;
        this.echo(banner)
        this.echo($(`${project_text}`))
      
    },
    // am
    about: function () {
      let value1 = Math.floor(Math.random()*1000);
      const about = $(`
        <span>IGN : <span id="IGN${value1}"></span><span style="color:#63b5cf;" id="Name${value1}"></span>)
        <br>
        Age : <span id="Age${value1}"></span>
        <br>
        Status : <span id="Status${value1}" style="color:#63b5cf"></span>
        <br>
        Job: <span id="Job${value1}"></span>
        <br>
        Description : <span id="Description${value1}"></span><span style="color:#63b5cf;" id="Description2${value1}"></span>.
        <br>
        Mail : <span style="color:#63b5cf;" id="Mail${value1}"></span>
        <br>
        Github : <span style="color:#63b5cf;" id="Github${value1}">  </span>(<span class="cmd">try:</span> go github)</span>
        `,value1);
      typeSentence("Albert(","#IGN"+value1.toString());
      setTimeout(()=>{typeSentence("h4z3", "#Name"+value1.toString());},900)
      setTimeout(()=>{typeSentence("19 years","#Age"+value1.toString());},1400);
      setTimeout(()=>{typeSentence("Alive","#Status"+value1.toString());},2300);
      setTimeout(()=>{typeSentence("Employee at Alpha Prishtine","#Job"+value1.toString());},3100);
      setTimeout(()=>{typeSentence("I'm interested in ","#Description"+value1.toString());},3900);
      setTimeout(()=>{typeSentence("Data science, Machine learning, Whitehat & Devops Engineer","#Description2"+value1.toString());},6200);
      setTimeout(()=>{typeSentence("info@iamh4z3.h4ck.me","#Mail"+value1.toString());},9000);
      setTimeout(()=>{typeSentence("cybersecurity-al","#Github"+value1.toString());},13700);
      
      const banner = `${color("maincolor", about_banner)}`;
      this.echo(banner);
      this.echo(about);
    },
    //cls
    cls: function () {
      location.reload();
    },
    //go
    go: function (web) {
      if (web == "github") {
        const github = `https://github.com/cybersecurity-al`;
        go_url(github);
      } else if (web == "reddit") {
        const reddit = `https://www.reddit.com/user/imh4z3`;
        go_url(reddit);
      } else if (web=="replit") {
        const replit = `https://replit.com/@iamh4z3`
        go_url(replit)
        
      } else if (web=="list") {
        const list = $(`
        <span>
        <a href="https://github.com/cybersecurity-al" target="_blank" style="color:#ffbfbd;text-decoration:none">[Github]</a> : cybersecurity-al (<span style="color:#63b5cf;">go github</span>)
        <br>
        <a href="https://www.reddit.com/user/imh4z3" target="_blank" style="color:#ffbfbd;text-decoration:none">[Reddit]</a> : ImH4z3 (<span style="color:#63b5cf;">go reddit</span>)
        <br>
        <a href="https://replit.com/@iamh4z3" target="_blank" style="color:#ffbfbd;text-decoration:none">[Replit]</a> : IamH4z3 (<span style="color:#63b5cf;">go replit</span>)
        <br>
        `);
        const banner = `${color("maincolor", links_banner)}`;
        this.echo(banner);
        this.echo(list);
      } else {
        this.echo(color("red", "err! try: go list"));
      }
    },
    // date
    date: function () {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    ls: function () {
      const ls1 = `${color("greenblue","bin")}  ${color("maincolor", "boot  dev  etc  home")}  ${color("greenblue", "lib  lib64")}  ${color("maincolor", "media  mnt  opt  proc  root  run")}  ${color("greenblue", "sbin")}  ${color("maincolor", "srv  sys")}  ${color("green", "tmp")}  ${color("maincolor", "usr  var")}`;
      this.echo(ls1)
    },
    sudo: function () {
      const usage = `Usage: sudo -h | -K | -k | -V
      Usage: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]
      Usage: sudo -l [-ABkNnS] [-g group] [-h host] [-p prompt] [-U user]
                  [-u user] [command [arg ...]]
      Usage: sudo [-ABbEHkNnPS] [-r role] [-t type] [-C num] [-D directory]
                  [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
                  [-u user] [VAR=value] [-i | -s] [command [arg ...]]
      Usage: sudo -e [-ABkNnS] [-r role] [-t type] [-C num] [-D directory]
                  [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
                  [-u user] file ...`;
      this.echo(usage)
    },
    //ping
    ping: function () {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "Connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected?")}`;
        this.echo(istato);
      }
    },
    //pwd
    pwd: function () {
      const loc = location.href;
      const pwd = $(`<p>` + loc + `</p>`);
      this.echo(pwd);
    },
    // src
  },
  {
    greetings: `
    ${color("maincolor", "..............")}                                     ${color("maincolor", "h4z3")}${color("white", "@")}${color("maincolor", "kali")}
    ${color("maincolor", "            ..,;:ccc,.")}                             -----------------
    ${color("maincolor", "          ......''';lxO.")}                           OS: Kali GNU/Linux Rolling in Ubuntu x86_64
    ${color("maincolor", ".....''''..........,:ld;")}                           Host: System Product Name System Version
    ${color("maincolor", "           .';;;:::;,,.x,")}                          Kernel: 4.4.0-210-generic
    ${color("maincolor", "      ..'''.            0Xxoc:,.  ...")}              Uptime: ${days} days, ${hours} hours, ${minutes} minutes
    ${color("maincolor", "  ....                ,ONkc;,;cokOdc',. ")}           Packages: 209 (dpkg)
    ${color("maincolor", " .                   OMo")}           ${color("white", "':ddo.")}          Shell: bash 5.2.15
    ${color("maincolor", "                    dMc               :OO;")}         Terminal: /dev/pts/1
    ${color("maincolor", "                    0M.                 .:o.")}       CPU: Intel i9-11900K (8) @ 4.1GHz
    ${color("maincolor", "                    ;Wd")}                            GPU: GeForce GTX 1060 SUPER
    ${color("maincolor", "                     ;XO,")}                          Memory: 6800MiB / 15944MiB (42%)
    ${color("maincolor", "                       ,d0Odlc;..")}
    ${color("maincolor", "                           ..',;:cdOOd::,.")}
    ${color("maincolor", "                                    .:d;.':;.")}
    ${color("maincolor", "                                       'd,  .'")}
    ${color("maincolor", "                                         ;l   ..")}
    ${color("maincolor", "                                          .o")}
    ${color("maincolor", "                                            c")}
    ${color("maincolor", "                                            .'")}
    ${color("maincolor", "                                             .")}
    `,
    prompt() {
      return `${color("gray","┌──(")}${color("red", "h4z3")}${color("red", "@kali")}${color("gray",")-[")}${color("red","~/")}]
${color("gray","└─\$")} `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);