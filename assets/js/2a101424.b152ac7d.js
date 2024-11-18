"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5082],{9522:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=r(4848),o=r(8453);const a={sidebar_position:4},i="Cloudflare IP Update",d={id:"install-online-judge/cloudflare-ip-update",title:"Cloudflare IP Update",description:"Original source: C\u1eadp nh\u1eadt IP \u0111\u1ed9ng cho t\xean mi\u1ec1n qua CloudFlare \u0111\u1ec3 truy c\u1eadp homelab t\u1ea1i nh\xe0",source:"@site/docs/install-online-judge/cloudflare-ip-update.md",sourceDirName:"install-online-judge",slug:"/install-online-judge/cloudflare-ip-update",permalink:"/tempdocs/docs/install-online-judge/cloudflare-ip-update",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install Judge",permalink:"/tempdocs/docs/install-online-judge/install-judge"},next:{title:"Common Errors",permalink:"/tempdocs/docs/install-online-judge/common-errors"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Setup <code>Cloudflare.sh</code> script",id:"setup-cloudflaresh-script",level:2},{value:"Create a Cloudflare API Token",id:"create-a-cloudflare-api-token",level:2},{value:"Zone ID",id:"zone-id",level:2},{value:"Create an A Record for your domain",id:"create-an-a-record-for-your-domain",level:2},{value:"Update the script",id:"update-the-script",level:2},{value:"Test the script",id:"test-the-script",level:2},{value:"Setup automatic <code>crontab</code>",id:"setup-automatic-crontab",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cloudflare-ip-update",children:"Cloudflare IP Update"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Original source:"})," ",(0,t.jsx)(n.a,{href:"https://thuanbui.me/cap-nhat-ip-dong-cho-ten-mien-qua-cloudflare-de-truy-cap-homelab-tai-nha/#7-chay-thu-nghiem",children:"C\u1eadp nh\u1eadt IP \u0111\u1ed9ng cho t\xean mi\u1ec1n qua CloudFlare \u0111\u1ec3 truy c\u1eadp homelab t\u1ea1i nh\xe0"})," ",(0,t.jsx)("br",{}),"\r\n",(0,t.jsx)(n.strong,{children:"Author:"})," ",(0,t.jsx)(n.a,{href:"https://thuanbui.me",children:"Thu\u1eadn B\xf9i"})]})}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A domain (transferred into Cloudflare DNS)."}),"\n",(0,t.jsx)(n.li,{children:"A Cloudflare account."}),"\n",(0,t.jsx)(n.li,{children:"A computer/Virtual machine running any version of Linux."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The domain must be a ",(0,t.jsx)(n.strong,{children:"PAID"})," domain (.com, .net, .org, .me, etc.). Cloudflare doesn't support free domains (.tk, .ga, .ml, .cf, .gq, etc.)!"]})}),"\n",(0,t.jsxs)(n.h2,{id:"setup-cloudflaresh-script",children:["Setup ",(0,t.jsx)(n.code,{children:"Cloudflare.sh"})," script"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a file with any name you want (in the instructions below, I will use ",(0,t.jsx)(n.code,{children:"Cloudflare.sh"}),"), which contains:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\n# Forked from benkulbertis/cloudflare-update-record.sh\r\n# CHANGE THESE\r\n\r\n# API Token (Recommended)\r\nauth_token="xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\r\n\r\n# Domain and DNS record for synchronization\r\nzone_identifier="f1nd7h3fuck1n6z0n31d3n71f13r4l50" # Can be found in the "Overview" tab of your domain\r\nrecord_name="ipv4.example.org"                     # Which record you want to be synced\r\n\r\n# DO NOT CHANGE LINES BELOW\r\n\r\n# SCRIPT START\r\necho -e "Check Initiated"\r\n\r\n# Check for current external network IP\r\nip=$(curl -s4 https://icanhazip.com/)\r\nif [[ ! -z "${ip}" ]]; then\r\n  echo -e "  > Fetched current external network IP: ${ip}"\r\nelse\r\n  >&2 echo -e "Network error, cannot fetch external network IP."\r\nfi\r\n\r\n# The execution of update\r\nif [[ ! -z "${auth_token}" ]]; then\r\n  header_auth_paramheader=( -H \'"Authorization: Bearer \'${auth_token}\'"\' )\r\nelse\r\n  header_auth_paramheader=( -H \'"X-Auth-Email: \'${auth_email}\'"\' -H \'"X-Auth-Key: \'${auth_key}\'"\' )\r\nfi\r\n\r\n# Seek for the record\r\nseek_current_dns_value_cmd=( curl -s -X GET \'"https://api.cloudflare.com/client/v4/zones/\'${zone_identifier}\'/dns_records?name=\'${record_name}\'&type=A"\' "${header_auth_paramheader[@]}" -H \'"Content-Type: application/json"\' )\r\nrecord=`eval ${seek_current_dns_value_cmd[@]}`\r\n\r\n# Can\'t do anything without the record\r\nif [[ -z "${record}" ]]; then\r\n  >&2 echo -e "Network error, cannot fetch DNS record."\r\n  exit 1\r\nelif [[ "${record}" == *\'"count":0\'* ]]; then\r\n  >&2 echo -e "Record does not exist, perhaps create one first?"\r\n  exit 1\r\nfi\r\n\r\n# Set the record identifier from result\r\nrecord_identifier=`echo "${record}" | sed \'s/.*"id":"//;s/".*//\'`\r\n\r\n# Set existing IP address from the fetched record\r\nold_ip=`echo "${record}" | sed \'s/.*"content":"//;s/".*//\'`\r\necho -e "  > Fetched current DNS record value   : ${old_ip}"\r\n\r\n# Compare if they\'re the same\r\nif [ "${ip}" == "${old_ip}" ]; then\r\n  echo -e "Update for A record \'${record_name} (${record_identifier})\' cancelled.\\\\n  Reason: IP has not changed."\r\n  exit 0\r\nelse\r\n  echo -e "  > Different IP addresses detected, synchronizing..."\r\nfi\r\n\r\n# The secret sause for executing the update\r\njson_data_v4="\'"\'{"id":"\'${zone_identifier}\'","type":"A","proxied":true,"name":"\'${record_name}\'","content":"\'${ip}\'","ttl":120}\'"\'"\r\nupdate_cmd=( curl -s -X PUT \'"https://api.cloudflare.com/client/v4/zones/\'${zone_identifier}\'/dns_records/\'${record_identifier}\'"\' "${header_auth_paramheader[@]}" -H \'"Content-Type: application/json"\' )\r\n\r\n# Execution result\r\nupdate=`eval ${update_cmd[@]} --data $json_data_v4`\r\n\r\n# The moment of truth\r\ncase "$update" in\r\n*\'"success":true\'*)\r\n  echo -e "Update for A record \'${record_name} (${record_identifier})\' succeeded.\\\\n  - Old value: ${old_ip}\\\\n  + New value: ${ip}";;\r\n*)\r\n  >&2 echo -e "Update for A record \'${record_name} (${record_identifier})\' failed.\\\\nDUMPING RESULTS:\\\\n${update}"\r\n  exit 1;;\r\nesac\n'})}),"\n",(0,t.jsx)(n.p,{children:"You have to change these variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"auth_token"}),": Cloudflare API Token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"zone_identifier"}),": Zone ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"record_name"}),": Domain."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-cloudflare-api-token",children:"Create a Cloudflare API Token"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://dash.cloudflare.com/profile/api-tokens",children:"Cloudflare User API Token"})," to create a new token."]}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(5979).A+"",width:"1253",height:"865"}),"\r\nClick ",(0,t.jsx)(n.em,{children:"Create Token"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(6128).A+"",width:"1253",height:"865"}),"\r\nClick ",(0,t.jsx)(n.em,{children:"Use Template"})," at ",(0,t.jsx)(n.em,{children:"Edit Zone DNS"})," section"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(3033).A+"",width:"1253",height:"865"}),"\r\nAt ",(0,t.jsx)(n.em,{children:"Zone Resources"})," section, choose your domain on which you want to update IP, then click ",(0,t.jsx)(n.em,{children:"Continue to Summary"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(9958).A+"",width:"1268",height:"865"}),"\r\nClick ",(0,t.jsx)(n.em,{children:"Create Token"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(8975).A+"",width:"1253",height:"865"}),"\r\nDone!"]})]}),"\n",(0,t.jsxs)(n.p,{children:["You should save the token you just create somewhere safe and sound. This token ",(0,t.jsx)(n.strong,{children:"WILL NOT"})," be shown again anymore on Cloudflare due to security reasons. If you forget to save it, you will have to delete it and create a new one."]}),"\n",(0,t.jsx)(n.h2,{id:"zone-id",children:"Zone ID"}),"\n",(0,t.jsxs)(n.p,{children:["At Cloudflare dashboard, click on your domain name to update IP. Scroll down to see ",(0,t.jsx)(n.strong,{children:"Zone ID"}),". Save this to append into your script."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(68).A+"",width:"1253",height:"865"})})}),"\n",(0,t.jsx)(n.h2,{id:"create-an-a-record-for-your-domain",children:"Create an A Record for your domain"}),"\n",(0,t.jsx)(n.p,{children:"V\xed d\u1ee5 m\xecnh mu\u1ed1n s\u1eed d\u1ee5ng t\xean mi\u1ec1n alibaba.thuanbui.me \u0111\u1ec3 truy c\u1eadp \u0111\u1ebfn homelab \u1edf nh\xe0. B\u1ea5m v\xe0o Add record v\xe0 t\u1ea1o m\u1ed9t A record m\u1edbi."}),"\n",(0,t.jsx)(n.p,{children:"Name: \u0111i\u1ec1n v\xe0o alibaba\r\nIPv4: \u0111i\u1ec1n t\u1ea1m 1.1.1.1, th\xf4ng s\u1ed1 n\xe0y s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt v\u1ec1 IP c\u1ee7a modem sau khi ch\u1ea1y script."}),"\n",(0,t.jsxs)(n.p,{children:["Case in point, I want to use ",(0,t.jsx)(n.code,{children:"alibaba.thuanbui.me"})," (author's domain) to access my homelab at home."]}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.em,{children:"Add record"})," and create a new A Record."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(1240).A+"",width:"1015",height:"306"})})}),"\n",(0,t.jsx)(n.h2,{id:"update-the-script",children:"Update the script"}),"\n",(0,t.jsx)(n.p,{children:"Use all those information to update your script."}),"\n",(0,t.jsxs)(n.p,{children:["By default, this script activates ",(0,t.jsx)(n.strong,{children:"Proxy"})," on Cloudflare to hide your modem's IP, reducing the risk of being attacked on your home network. For some reasons, you don't want to hide your IP, then change the ",(0,t.jsx)(n.code,{children:'"proxied":true'})," to ",(0,t.jsx)(n.code,{children:'"proxied":false'}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"test-the-script",children:"Test the script"}),"\n",(0,t.jsxs)(n.p,{children:["Set the execute permission for the file ",(0,t.jsx)(n.code,{children:"cloudflare.sh"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:"$ chmod +X cloudflare.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ bash cloudflare.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"If everything is correct, you should see the following output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ bash cloudflare.sh\r\nbash: warning: setlocale: LC_ALL: cannot change locale (en_US.UTF-8)\r\nCheck Initiated\r\n  > Fetched current external network IP: 27.xx.xx.xx\r\n  > Fetched current DNS record value   : 1.1.1.1\r\n  > Different IP addresses detected, synchronizing...\r\nUpdate for A record 'alibaba.thuanbui.me (48bxxxxxxxxxxxxxxxxxxxx60)' succeeded.\r\n  - Old value: 1.1.1.1\r\n  + New value: 27.xx.xx.xx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Back to Cloudflare DNS page, the domain ",(0,t.jsx)(n.code,{children:"alibaba.thuanbui.me"})," has been updated with the new IP. Naisu."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(341).A+"",width:"1021",height:"297"})})}),"\n",(0,t.jsxs)(n.h2,{id:"setup-automatic-crontab",children:["Setup automatic ",(0,t.jsx)(n.code,{children:"crontab"})]}),"\n",(0,t.jsxs)(n.p,{children:["The last thing you have to do is to setup ",(0,t.jsx)(n.code,{children:"crontab"})," to run script 24/7. Then you don't have to mind about it anymore."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal (Root permissions)"',children:"$ crontab -e\n"})}),"\n",(0,t.jsx)(n.p,{children:"I adjusted the script to run automatically every 10 minutes by adding this line at the bottom."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Crontab File"',children:"*/10 * * * * /bin/bash /directory/to/your/cloudflare.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to change ",(0,t.jsx)(n.code,{children:"/directory/to/your/cloudflare.sh"})," to the path where your ",(0,t.jsx)(n.code,{children:"cloudflare.sh"})," file is stored."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1240:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-a-record-218ce840beace39391c8614e01e92e1f.png"},5979:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-1-601e3c84229aaeb3697f1f6863ab1192.png"},6128:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-2-bd077ff8efb79f55d5117ee85969d008.png"},3033:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-3-adc26b8216d42790064dea28ce01f513.png"},9958:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-4-29782acb0e1c60527a13b4fb5f9ea9df.png"},8975:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-5-718c3e5ab9b38b69b16c2859448c1b29.png"},68:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-create-auth-key-6-0d668b791065b67b4e8498349bf411cd.png"},341:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cloudflare-update-a-record-7082cd36036ebc898f994effa75aad2d.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(6540);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);