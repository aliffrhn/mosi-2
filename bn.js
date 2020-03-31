// Mencari Nilai Phi

// Define Variable
let l = 4.5;
let N = 100;
let d = 5;
let Q = 56;

// Hitung Phi
let phi = (2*l)*N/(d*Q)

// Hitung Error
let error = 3.14 - phi

// output phi
console.log("Nilai Phi Analitik = ", 3.14159265358979323846264)
console.log("Nilai Estimasi Phi = ", phi)

// Mutlak
if(error < 0){
    error = error * -1
}

// Hitung Eror
let persen = error * 100

// Nilai Error
console.log("Nilai Error = ", error)
console.log("Persen Error = ",persen,"%")