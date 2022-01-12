### SCSS INSTALLIEREN

1. npm init
2.  npm install bootstrap 
3. npm install --save-dev sass live-server npm-run-all
4. "scripts": {
"start": "run-p watch watch:style",
"watch": "live-server --port=8000",
"watch:style": "sass --watch scss:css"
},
Bunu package.json dosyasinin icerisine yaz.

5. mkdir scss css /css ve scss klosörü olustur.
6. touch index.html / html olustur
7. npm start / herseyi calistirir.
8. Sonra css dosyasini link olarak (herzaman oldugu gibi) html dosyasina bagla. (<link rel="stylesheet" href="css/style.css">)
9. scss dosyasinda bootstrepi bagla. Bunu baglarken basina ../ yada sadece / yazman gerekip gerekmedigini kontrol et. Yoksa kendi css dosyan silinir. (Düzeltince geri gelir.)
@import "../node_modules/bootstrap/scss/bootstrap.scss"
10. Akabinde node modules klosöründeki bootstrap ve onun icindeki variabels e gir.Ordan degistirmek istedigin seyleri kendi SCSS dosyana kopyalayip yeniden tanimla. 
