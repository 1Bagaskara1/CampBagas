.mode column
.headers on

select mahasiswa.*, jurusan.namajurusan from mahasiswa join jurusan on mahasiswa.idjurusan = jurusan.idjurusan;

SELECT mahasiswa.*, jurusan.namajurusan FROM mahasiswa JOIN jurusan ON mahasiswa.idjurusan = jurusan.idjurusan WHERE umur < 20;

SELECT mahasiswa.*, Kontrak.Nilai FROM Mahasiswa JOIN Kontrak ON Mahasiswa.NIM = Kontrak.NIM WHERE Nilai <= 'B';;

SELECT Mahasiswa.NamaMahasiswa, Kontrak.NIM, SUM(SKS) AS Total_SKS FROM Mahasiswa JOIN Kontrak ON Mahasiswa.NIM = Kontrak.NIM GROUP BY KONTRAK.NIM HAVING Total_SKS > 10;

SELECT mahasiswa.*, Mata_Kuliah.NamaMatkul FROM mahasiswa JOIN Mata_Kuliah ON mahasiswa.KodeMatkul = Mata_Kuliah.KodeMatkul WHERE NamaMatkul = 'Data Mining';

select Dosen.NamaDosen, (select count(*) from Kontrak WHERE Dosen.IdDosen = Kontrak.IdDosen) as total_mahasiswa from Dosen;

SELECT * FROM Mahasiswa GROUP BY Umur, idjurusan;

SELECT Mahasiswa.NamaMahasiswa, Kontrak.NIM, Kontrak.Nilai, jurusan.NamaJurusan, Mata_Kuliah.NamaMatkul, Dosen.NamaDosen FROM Mahasiswa JOIN Kontrak ON Mahasiswa.NIM = Kontrak.NIM JOIN Dosen ON Kontrak.IdDosen = Dosen.IdDosen JOIN Jurusan ON Mahasiswa.idjurusan = Jurusan.IdJurusan JOIN Mata_Kuliah ON Kontrak.KodeMatkul = Mata_Kuliah.KodeMatkul WHERE NILAI > 'C';
