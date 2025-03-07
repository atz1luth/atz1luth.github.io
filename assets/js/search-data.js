
const currentUrl = window.location.href;
const siteUrl = "https://atz1luth.github.io"; 
let updatedUrl = currentUrl.replace("https://atz1luth.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-h0m3",
    title: "\ h0m3 /",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bl0g",
          title: "/ bl0g \",
          description: "A cybersecurity enthusiast",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-d0cs",
          title: "\ d0Cs /",
          description: "A growing collection of your cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-about",
              title: "about",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-cv",
              title: "Cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-write-up-machine-keeper-hackthebox-easy",
      
        title: "Write Up Machine Keeper, Hackthebox - Easy",
      
      description: "write up easy machine Keeper - hackthebox",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/writeUp-keeper/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-how-to-play-hackthebox-com",
      
        title: "how to play hackthebox.com",
      
      description: "write up machine broker",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/how-to-play-hackthebox/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-htb-xplorer-plus",
      
        title: "htb-Xplorer-Plus",
      
      description: "A tool to interact with Hack The Box",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/htb-Xpolorer-Plus/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/en-us/example_pdf.pdf";
        
      },
    },{id: "post-bspwm",
      
        title: "bspwm",
      
      description: "first contact with bspwm",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/first_contact_with-bspwm/";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/distill/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-science-of-the-heart",
          title: 'Science of the Heart',
          description: "Electromagnetic field of the heart",
          section: "News",handler: () => {
              window.location.href = "/news/Science_of_the_Heart/";
            },},{id: "projects-prototype-pollution",
          title: 'Prototype pollution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Prototype-Pollution/";
            },},{id: "projects-summary",
          title: 'Summary',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetsheets/sum/";
            },},{id: "projects-sql-injection-prevention",
          title: 'SQL Injection Prevention',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SQL_Injection_Prevention_Cheat_Sheet/";
            },},{id: "projects-ms-access-sql-injection",
          title: 'MS Access SQL Injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/access-sql-injection/";
            },},{id: "projects-mssql-injection",
          title: 'MSSQL Injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mssql-injection/";
            },},{id: "projects-mysql-file-priv-to-ssrf-rce",
          title: 'MySQL File priv to SSRF/RCE',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mysql-ssrf/";
            },},{id: "projects-mysql-injection",
          title: 'MySQL injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mysql/";
            },},{id: "projects-oracle-injection",
          title: 'Oracle injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oracle-injection/";
            },},{id: "projects-postgresql-large-objects",
          title: 'PostgreSQL Large Objects',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/big-binary-files-upload-postgresql/";
            },},{id: "projects-dblink-lo-import-data-exfiltration",
          title: 'dblink/lo_import data exfiltration',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dblink-lo_import-data-exfiltration/";
            },},{id: "projects-network-privesc-port-scanner-and-ntlm-chanllenge-response-disclosure",
          title: 'Network - Privesc, Port Scanner and NTLM chanllenge response disclosure',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/network-privesc-port-scanner-and-ntlm-chanllenge-response-disclosure/";
            },},{id: "projects-pl-pgsql-password-bruteforce",
          title: 'PL/pgSQL Password Bruteforce',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-pgsql-password-bruteforce/";
            },},{id: "projects-postgresql-injection",
          title: 'PostgreSQL injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/postgresql-injection/";
            },},{id: "projects-rce-with-postgresql-extensions",
          title: 'RCE with PostgreSQL Extensions',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rce-with-postgresql-extensions/";
            },},{id: "projects-postgresql-languages",
          title: 'PostgreSQL Languages',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rce-with-postgresql-languages/";
            },},{id: "projects-sql-injection",
          title: 'SQL-Injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sql-cheetsheet/";
            },},{id: "projects-sql-injection",
          title: 'SQL Injection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sql-injection/";
            },},{id: "projects-second-order-sqlis",
          title: 'Second Order SQLis.',
          description: "SQLMap",
          section: "Projects",handler: () => {
              window.location.href = "/projects/second-order-injection-sqlmap/";
            },},{id: "projects-sqlmap-cheatsheet",
          title: 'SQLMap - Cheatsheet',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sqlmap/";
            },},{id: "projects-cheetsheets",
          title: 'Cheetsheets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cheetsheets/";
            },},{id: "projects-basic-net-deserialization-objectdataprovider-gadget-expandedwrapper-and-json-net",
          title: 'Basic .Net deserialization (ObjectDataProvider gadget, ExpandedWrapper, and Json.Net)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/basic-.net-deserialization-objectdataprovider-gadgets-expandedwrapper-and-json.net/";
            },},{id: "projects-basic-java-deserialization",
          title: 'Basic java deserialization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/basic-java-deserialization-objectinputstream-readobject/";
            },},{id: "projects-deserialization",
          title: 'Deserialization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dese/";
            },},{id: "projects-deserialization",
          title: 'Deserialization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deserialization/";
            },},{id: "projects-exploiting-viewstate-without-knowing-the-secrets",
          title: 'Exploiting __VIEWSTATE without knowing the secrets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exploiting__viewstate-parameter/";
            },},{id: "projects-java-dns-deserialization-gadgetprobe-and-java-deserialization-scanner",
          title: 'Java DNS Deserialization, GadgetProbe and Java Deserialization Scanner',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/java-dns-deserialization-and-gadgetprobe/";
            },},{id: "projects-java-transformers-to-rutime-exec-payload",
          title: 'Java Transformers To Rutime Exec Payload',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/java-transformers-to-rutime-exec-payload/";
            },},{id: "projects-jndi-java-naming-and-directory-interface-amp-log4shell",
          title: 'JNDI - Java Naming and Directory Interface &amp;amp; Log4Shell',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jndi-java-naming-and-directory-interface-and-log4shell/";
            },},{id: "projects-nodejs-proto-amp-prototype-pollution",
          title: 'NodeJS - __proto__ &amp;amp; prototype Pollution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NodeJS-prototype-Pollution/";
            },},{id: "projects-client-side-prototype-pollution",
          title: 'Client Side Prototype Pollution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/client-side-prototype-pollution/";
            },},{id: "projects-express-prototype-pollution-gadgets",
          title: 'Express Prototype Pollution Gadgets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/express-prototype-pollution-gadgets/";
            },},{id: "projects-prototype-pollution-to-rce",
          title: 'Prototype Pollution to RCE',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prototype-pollution-to-rce/";
            },},{id: "projects-php-deserialization-autoload-classes",
          title: 'PHP - Deserialization + Autoload Classes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/php-deserialization-+-autoload-classes/";
            },},{id: "projects-python-yaml-deserialization",
          title: 'Python Yaml Deserialization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python-yaml-deserialization/";
            },},{id: "projects-enumeration",
          title: 'Enumeration',
          description: "A..",
          section: "Projects",handler: () => {
              window.location.href = "/projects/enum/";
            },},{id: "projects-files",
          title: 'files',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/files/";
            },},{id: "projects-ports",
          title: 'Ports',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ports/";
            },},{id: "projects-ssl-tls",
          title: 'SSL/TLS',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ssl-tls/";
            },},{id: "projects-expolitation",
          title: 'Expolitation',
          description: "A..",
          section: "Projects",handler: () => {
              window.location.href = "/projects/expolitation/";
            },},{id: "projects-file-transfer",
          title: 'File transfer',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/file-transfer/";
            },},{id: "projects-payloads",
          title: 'Payloads',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/payloads/";
            },},{id: "projects-reverse-shell",
          title: 'Reverse Shell',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reverse-shells/";
            },},{id: "projects-bug-bounty",
          title: 'Bug Bounty',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/bugbounty/";
            },},{id: "projects-burp-sutite",
          title: 'Burp-Sutite',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/burp/";
            },},{id: "projects-code-review",
          title: 'Code review',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code-review/";
            },},{id: "projects-random",
          title: 'Random',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/dictionaires/";
            },},{id: "projects-exploiting",
          title: 'Exploiting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hacking/cheetseets/others/Exploiting/";
            },},{id: "projects-internal-pentest",
          title: 'Internal Pentest',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/internal-pentest/";
            },},{id: "projects-others",
          title: 'Others',
          description: "A..",
          section: "Projects",handler: () => {
              window.location.href = "/projects/others/";
            },},{id: "projects-password-cracking",
          title: 'Password cracking',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/password-cracking/";
            },},{id: "projects-recon-suites-review",
          title: 'Recon suites review',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/#/";
            },},{id: "projects-subdomain-tools-review",
          title: 'Subdomain tools review',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/Subdomain-tools-review/";
            },},{id: "projects-tools-everywhere",
          title: 'tools everywhere',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/tools-everywhere/";
            },},{id: "projects-pentesting-web-checklist",
          title: 'Pentesting Web checklist',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/";
            },},{id: "projects-web-fuzzers-review",
          title: 'Web fuzzers review',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetseets/others/web-fuzzers-comparision/";
            },},{id: "projects-root-domains",
          title: 'Root domains',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/domain-enum/";
            },},{id: "projects-host-scanning",
          title: 'Host Scanning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/host-scanning/";
            },},{id: "projects-network-scanning",
          title: 'Network Scanning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/network-scanning/";
            },},{id: "projects-packet-scanning",
          title: 'Packet Scanning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/packet-scanning/";
            },},{id: "projects-public-info-gathering",
          title: 'Public info gathering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/public-info-gathering/";
            },},{id: "projects-recon",
          title: 'Recon',
          description: "A..",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recon/";
            },},{id: "projects-subdomain-enum",
          title: 'Subdomain Enum',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/subdomain-enum/";
            },},{id: "projects-webs-recon",
          title: 'Webs recon',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/webs-recon/";
            },},{id: "projects-oscp-cheatsheet",
          title: 'OSCP Cheatsheet',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/hacking/cheetsheets/OSCP/";
            },},{id: "projects-active-directory",
          title: 'Active Directory',
          description: "Active Directory Exploitation Cheat Sheet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AD/";
            },},{id: "projects-apache",
          title: 'Apache',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/apache/";
            },},{id: "projects-bash-scripting",
          title: 'Bash scripting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bash/";
            },},{id: "projects-bluebird",
          title: 'Bluebird',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bluebird/";
            },},{id: "projects-emoji",
          title: 'emoji',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emogi/";
            },},{id: "projects-full-ttys",
          title: 'Full TTYs',
          description: "Estabilizor de shells",
          section: "Projects",handler: () => {
              window.location.href = "/projects/full-ttys/";
            },},{id: "projects-git",
          title: 'Git',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/git/";
            },},{id: "projects-keyboard-unicode-symbols",
          title: 'Keyboard Unicode Symbols',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/keyboard-symbols/";
            },},{id: "projects-python",
          title: 'Python',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python/";
            },},{id: "projects-python-2-vs-python-3",
          title: 'Python 2 vs Python 3',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/docs/misc/python2-3/";
            },},{id: "projects-shell",
          title: 'shell',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shell/";
            },},{id: "projects-vim",
          title: 'Vim',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vim/";
            },},{id: "projects-vim-scripting",
          title: 'Vim scripting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vimscript/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/47z1Lu7h", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/47z1lu7h", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://app.hackthebox.com/profile/642903", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/47z1lu7h", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/4tz1luth", "_blank");
        },
      },{
          id: 'lang-es',
          title: 'es',
          section: 'Languages',
          handler: () => {
            window.location.href = "/es" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
