---
sidebar_position: 6
---

# Utilities

## Useful links:

1. Live VNOJ Page: https://oj.vnoi.info/
2. VNOJ Documentation: https://vnoi-admin.github.io/vnoj-docs/#/
3. VNOJ Documentation Repository:  https://github.com/VNOI-Admin/vnoj-docs
4. VNOJ Online Judge Repository: https://github.com/VNOI-Admin/OJ
5. VNOJ Judge Server Repository: https://github.com/VNOI-Admin/judge-server

## Some bash-shells, which could speed up the installation process

### Create 5 main configuration files
```bash
curl -o site.conf    https://raw.githubusercontent.com/VNOI-Admin/vnoj-docs/refs/heads/master/sample_files/site.conf
curl -o bridged.conf https://raw.githubusercontent.com/VNOI-Admin/vnoj-docs/refs/heads/master/sample_files/bridged.conf
curl -o celery.conf  https://raw.githubusercontent.com/VNOI-Admin/vnoj-docs/refs/heads/master/sample_files/celery.conf
curl -o wsevent.conf https://raw.githubusercontent.com/VNOI-Admin/vnoj-docs/refs/heads/master/sample_files/wsevent.conf
curl -o nginx.conf   https://raw.githubusercontent.com/VNOI-Admin/vnoj-docs/refs/heads/master/sample_files/nginx.conf
```

### Create LaTeX fonts
```bash
wget -4 -O MathJax_AMS-Regular.woff          https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_AMS-Regular.woff
wget -4 -O MathJax_Calligraphic-Bold.woff    https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Calligraphic-Bold.woff
wget -4 -O MathJax_Calligraphic-Regular.woff https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Calligraphic-Regular.woff
wget -4 -O MathJax_Fraktur-Bold.woff         https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Fraktur-Bold.woff
wget -4 -O MathJax_Fraktur-Regular.woff      https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Fraktur-Regular.woff
wget -4 -O MathJax_Main-Bold.woff            https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Main-Bold.woff
wget -4 -O MathJax_Main-Italic.woff          https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Main-Italic.woff
wget -4 -O MathJax_Main-Regular.woff         https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Main-Regular.woff
wget -4 -O MathJax_Math-BoldItalic.woff      https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Math-BoldItalic.woff
wget -4 -O MathJax_Math-Italic.woff          https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Math-Italic.woff
wget -4 -O MathJax_Math-Regular.woff         https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Math-Regular.woff
wget -4 -O MathJax_SansSerif-Bold.woff       https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_SansSerif-Bold.woff
wget -4 -O MathJax_SansSerif-Italic.woff     https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_SansSerif-Italic.woff
wget -4 -O MathJax_SansSerif-Regular.woff    https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_SansSerif-Regular.woff
wget -4 -O MathJax_Script-Regular.woff       https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Script-Regular.woff
wget -4 -O MathJax_Size1-Regular.woff        https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Size1-Regular.woff
wget -4 -O MathJax_Size2-Regular.woff        https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Size2-Regular.woff
wget -4 -O MathJax_Size3-Regular.woff        https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Size3-Regular.woff
wget -4 -O MathJax_Size4-Regular.woff        https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Size4-Regular.woff
wget -4 -O MathJax_Typewriter-Regular.woff   https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Typewriter-Regular.woff
wget -4 -O MathJax_Vector-Bold.woff          https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Vector-Bold.woff
wget -4 -O MathJax_Vector-Regular.woff       https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Vector-Regular.woff
wget -4 -O MathJax_Zero.woff                 https://github.com/mathjax/MathJax-src/raw/refs/heads/master/ts/output/chtml/fonts/tex-woff-v2/MathJax_Zero.woff
```