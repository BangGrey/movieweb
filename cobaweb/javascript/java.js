// Menangani aksi ketika tombol Login ditekan
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman otomatis
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Lakukan validasi email dan password di sini
        alert('Login berhasil!'); // Menampilkan pesan jika login sukses
        // Redirect atau aksi lainnya dapat dilakukan di sini
    } else {
        alert('Harap masukkan email dan password!');
    }
});

// Menangani aksi ketika tombol Login sebagai Tamu ditekan
document.getElementById('guest-btn').addEventListener('click', function () {
    // Aksi untuk login sebagai tamu
    alert('Login sebagai Tamu');
    // Redirect atau aksi lainnya untuk login tamu bisa dilakukan di sini
});

// Menangani aksi ketika tombol Register ditekan
document.getElementById('register-btn').addEventListener('click', function () {
    // Aksi untuk membuka halaman registrasi atau menampilkan form registrasi
    alert('Anda akan diarahkan ke halaman registrasi!');
    // Redirect ke halaman registrasi bisa dilakukan di sini
    // window.location.href = 'halaman-register.html'; // Contoh redirect ke halaman register
});
