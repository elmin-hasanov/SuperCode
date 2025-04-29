Tabelle Customers:

-- 1. Zeige alle Länder an, die mehr als fünf Kunden haben
SELECT Country, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5;


Tabelle: Orders

-- 1. Zeige alle Bestellungen im August 1996 an
SELECT * FROM Orders
WHERE OrderDate LIKE '1996-08%';

-- 2. Zeige alle CustomerIds, die mehr als eine Bestellung getätigt haben
SELECT CustomerID, COUNT(*) AS OrderCount
FROM Orders
GROUP BY CustomerID
HAVING COUNT(*) > 1;

-- 3. Zeige die CustomerId mit den meisten Bestellungen an
SELECT CustomerID, COUNT(*) AS OrderCount
FROM Orders
GROUP BY CustomerID
ORDER BY OrderCount DESC
LIMIT 1;

-- Bonus: Zeige direkt den Kundennamen an (mit JOIN)
SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS OrderCount
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GROUP BY Customers.CustomerName
ORDER BY OrderCount DESC
LIMIT 1;

Tabelle: Products

-- 1. Zeige alle Produkte an, die von der Firma “Heli Süßwaren GmbH & Co. KG” geliefert werden
SELECT Products.*
FROM Products
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Suppliers.SupplierName = 'Heli Süßwaren GmbH & Co. KG';

-- 2. Zeige den Durchschnittspreis aller Produkte an
SELECT AVG(Price) AS AveragePrice FROM Products;

-- 3. Zeige den Höchstpreis aller Produkte an
SELECT MAX(Price) AS HighestPrice FROM Products;


Tabelle: Suppliers

-- 1. Zeige alle Lieferanten an, deren Telefonnummer keine Klammern () enthält
SELECT * FROM Suppliers
WHERE Phone NOT LIKE '%(%' AND Phone NOT LIKE '%)%';

-- 2. Liste die Länder mit der Anzahl der Lieferanten auf, sortiert nach der Anzahl der Lieferanten in absteigender Reihenfolge, bei Gleichstand alphabetisch
SELECT Country, COUNT(*) AS SupplierCount
FROM Suppliers
GROUP BY Country
ORDER BY SupplierCount DESC, Country ASC;

