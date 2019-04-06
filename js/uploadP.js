var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change',function (e) {
	// body...
	var file = e.target.files[0];
	//ref
	var user = firebase.auth().currentUser;
	var uid = user.uid;
	console.log(uid);
	var storageRef = firebase.storage().ref('user/'+uid+'/'+file.name);
	//upload
	var task = storageRef.put(file);

	task.on('state_changed',
		function progress(snapshot){
			var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			uploader.value = percentage;
		},

		function error(err){

		},
		function complete(){

		}
		);
});