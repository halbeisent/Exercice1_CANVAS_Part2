var e2p1 = document.getElementById('shape');
var drawProcess = e2p1.getContext('2d');
// On commence par tracer le cone
drawProcess.beginPath();
drawProcess.moveTo(200,400);
drawProcess.lineTo(250,200);
drawProcess.lineTo(150,200);
drawProcess.closePath();
drawProcess.fillStyle = '#aa6522';
drawProcess.fill();
// On trace la courbe quadratique
drawProcess.beginPath();
drawProcess.moveTo(250,200);
drawProcess.quadraticCurveTo(220,60,150,200);
drawProcess.fillStyle = '#8a0908';
drawProcess.fill();
