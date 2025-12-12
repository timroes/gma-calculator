Inspect the src/rates/rates.ts file to become familar with it. It requires only entries if
a rate changed in a year. If there has be no change for a country (or region) don't add any
entry for it in the rates.ts.

Parse now the steuerliche-behandlung PDF file in the root of this folder. It will contain the
new rates for 2026. It will though contain all rates. Changed rates are printed in bold in the 
table. Extract all bold rates from that and update the rates.ts file with them. Take into account
that the rates.ts file contains the English names of those countries, while the PDF contains the 
German country names. Also take into account that some countries have different rates by region/
city. Those region/cities are listed in the PDF below the country name beginning with a dash.

The 2nd column in the table (labeled "bei einer Abwesenheitsdauer von mindestens 24 Stunden je 
Kalendertag") is the `full` rate in the rates.ts, the 3rd column (labeled "für den An- und 
Abreisetag sowie bei einer Abwesenheitsdauer von mehr als 8 Stunden je Kalendertag") is the 
`reduced` rate. The 4th column is irrelevant for us and can be ignored.

Take into account that sometimes only one of the rates might have changed (i.e. is bold in the PDF).
In this case still copy over both values from the PDF, i.e. every entry in rates.ts need to have 
the full and reduced value.

After updating the rates.ts provide a list of all rows with bold numbers that you could not match 
to any country in the rates.ts file.
