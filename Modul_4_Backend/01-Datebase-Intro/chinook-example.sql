-- https://www.db-fiddle.com/f/dJMLeu2WdNHpsgc4AdVBZY/0

-- SELECT * FROM Album;

-- SELECT * FROM Artist;

-- SELECT AlbumId, Title, Name as Artist FROM Album JOIN Artist ON Album.ArtistId = Artist.ArtistId ORDER BY Artist;


-- SELECT Name as Artist, COUNT(*) as AlbumCount FROM Album JOIN Artist ON Album.ArtistId = Artist.ArtistId GROUP BY Artist ORDER BY AlbumCount DESC LIMIT 3;


-- TrackId, Tracktitel, Albumtitel, Millisekunden, von Album mit AlbumId 1
SELECT TrackId, Title as AlbumTitle, Name as TrackName, milliseconds from Track JOIN Album ON Track.AlbumId = Album.AlbumId WHERE Album.AlbumId = 1;