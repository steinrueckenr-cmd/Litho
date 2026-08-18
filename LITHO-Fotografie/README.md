# LITHO Fotografie

Responsive Portfolio-Website für ein Portrait- und Hochzeitsfotografie-Studio in Köln. Die Gestaltung orientiert sich an einer ruhigen, editorialen Bildsprache mit Serifentypografie, warmen Naturtönen und großzügigen Fotoflächen.

## Lokal starten

```bash
npm install
npm run dev
```

Danach die im Terminal angezeigte lokale Adresse öffnen.

## Inhalte anpassen

- Texte, Navigation und Portfolio-Karten: `app/page.tsx`
- Farben, Abstände, Typografie und Bildzuschnitte: `app/globals.css`
- Seitentitel und SEO-Metadaten: `app/layout.tsx`
- Demo-Fotos: Bild-URLs in `app/page.tsx` und `app/globals.css`

Die eingebauten Fotos sind Demo-Motive von Unsplash. Vor Veröffentlichung sollten sie durch eigene, weboptimierte Bilder ersetzt werden.

## Kontaktformular

Das Formular validiert Eingaben und zeigt aktuell eine lokale Bestätigung. Für echten E-Mail-Versand muss es vor Veröffentlichung an einen Formular-Dienst oder eine eigene API-Route angebunden werden, zum Beispiel Formspree, Basin, Resend oder Cloudflare Turnstile plus Worker.

## GitHub und Hosting

1. Neues leeres Repository bei GitHub anlegen.
2. Dieses Projekt lokal entpacken und im Projektordner ausführen:

```bash
git init
git add .
git commit -m "Initial LITHO portfolio"
git branch -M main
git remote add origin DEINE_GITHUB_REPOSITORY_URL
git push -u origin main
```

3. Das Repository bei Vercel, Cloudflare Pages oder Netlify importieren.
4. Eigene Domain verbinden und anschließend die Domain in Google Search Console sowie Bing Webmaster Tools eintragen.

## SEO-Basis

Deutsche Metadaten, Open-Graph-Daten, strukturierte `ProfessionalService`-Daten, semantische Überschriften, Alt-Texte und eine freigegebene `robots.txt` sind bereits vorhanden. Für gute lokale Auffindbarkeit fehlen später noch echte Referenztexte, ein Impressum, Datenschutz, eine feste Domain und idealerweise einzelne Portfolio-Unterseiten.
