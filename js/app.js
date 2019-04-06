
function close_book() {
	  console.log("close_book");

	bookid = $('.book_close').attr('id');
	firebase.database().ref('books/'+bookid).remove()
	Materialize.toast('Book Removed', 4000)

}
function close_paper(userid,filename) {
    console.log("close_paper");

  paperid = $('.paper_close').attr('id');
  firebase.database().ref('papers/'+paperid).remove()


//temp not delete
  //from storage
  var Ref = firebase.storage().ref('user/'+userid+'/'+filename)

  // Delete the file
  Ref.delete().then(function() {
    Materialize.toast('Paper Removed', 4000)
  }).catch(function(error) {
    Materialize.toast('Error'+error, 4000)

});

}

function download_paper(filename,userid,username) {
   //console.log(a+b+c);
   var Ref = firebase.storage().ref('user/'+userid+'/'+filename);
   Ref.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"
    window.location = url;
    }).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
} 

function okb(valuess){
  console.log("run hua"+valuess);
setTimeout(function () {
if(($(window).scrollTop() + $(window).height() == $(document).height())&&($('.fixed-action-btn').hasClass( "active" ))) {
      
        console.log("ok");
        $('.fixed-action-btn').css("bottom", "50px");
        
   }
},500);
   

}


/*
const preObject = document.getElementById('object');

//create ref
const dbRefObject = firebase.database().ref().child('object');

//sync obj
dbRefObject.on('value',snap => {
    preObject.innerText = JSON.stringify(snap.val(),null,3);
});
*/
function hidemsg()
{
	$('#card-alerts').hide()
}
$('#Badge').hover(function(){
	$(img).show();
	$(c).hide();
	setTimeout(function () {
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    $(img).hide();
    $(c).show();
},6000);
});

// 

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDa9XK3-ytiEYodXnUZ65AJheNm7hy4Wfo",
    authDomain: "studybuddy-91418.firebaseapp.com",
    databaseURL: "https://studybuddy-91418.firebaseio.com",
    projectId: "studybuddy-91418",
    storageBucket: "studybuddy-91418.appspot.com",
    messagingSenderId: "620271151536"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
      //window.location = 'app.html';
      run();
    }
    else {
      window.location = '/';
    }
  });

function run(){firebase.database();var e,a,o,i,t,n,l,r=firebase.auth().currentUser;function s(){console.log("loading qp function"),$("#append_book").empty(),firebase.database().ref("papers").on("value",function(e){var a=e.val();console.log("show papers"),colorid=0,$("#append_book").empty();for(var o in a){var i=a[o].filename,t=a[o].userid,n=a[o].username;if(console.log(a[o]),a[o].userid==r.uid)var l='<button type="button" onclick="close_paper(\''+a[o].userid+"','"+i+"')\" id="+o+' class="paper_close white-text waves-effect right red" aria-label="Close"> <span aria-hidden="true">×</span></button>';else l="";var s='<div class="col s12 m3">\n<div class="card gradient-shadow '+["gradient-45deg-light-blue-cyan","gradient-45deg-purple-amber","gradient-45deg-purple-deep-orange","gradient-45deg-orange-amber","gradient-45deg-amber-amber","gradient-45deg-indigo-purple","gradient-45deg-purple-light-blue"][colorid]+' border-radius-3">\n'+l+'<div class="card-content center"> <div class="paper"><h6>'+i+"</h6> <br> Submited by "+n+' <br><br> <a class="btn" onclick="download_paper(\''+i+"','"+t+"','"+n+"')\" >Download Paper</a> </div> </div>\n</div>\n</div>";$("#append_book").append(s),colorid<6?colorid++:colorid=0}},function(e){e?Materialize.toast(e,2e3):Materialize.toast("loading books",2e3)})}function d(){firebase.database().ref("books").on("value",function(e){var a=e.val();console.log("show books"),colorid=0,$("#append_book").empty();for(var o in a){if(console.log(a[o]),a[o].uid==r.uid)var i='<button type="button" onclick="close_book()" id='+o+' class="book_close white-text waves-effect right red" aria-label="Close"> <span aria-hidden="true">×</span></button>';else i="";var t='<div class="col s12 m3">\n<div class="card gradient-shadow '+["gradient-45deg-light-blue-cyan","gradient-45deg-purple-amber","gradient-45deg-purple-deep-orange","gradient-45deg-orange-amber","gradient-45deg-amber-amber","gradient-45deg-indigo-purple","gradient-45deg-purple-light-blue"][colorid]+' border-radius-3">\n'+i+'<div class="card-content center">\n<div class="component">\n<ul class="align">\n<li>\n<figure class=\'book\'>\n<ul class=\'hardcover_front\'>\n<li>\n<div class="coverDesign blue">\n<h4 id="bnapshow">'+a[o].title+'</h4>\n<p id="anapshow">'+a[o].author+'</p>\n</div>\n</li>\n<li></li>\n</ul>\n<ul class=\'page\'>\n<li></li>\n<li>\n<a class="" href="#">Show Details</a><br>Given Details: '+a[o].contact+"\n<br>Submited by:"+a[o].name+'</li>\n<li></li>\n<li></li>\n<li></li>\n</ul>\n</figure>\n</li>\n</ul>\n</div>\n<h6 class="white-text lighten-4">'+a[o].title+'</h6>\n<p class="white-text lighten-4"> Book Price:'+a[o].price+"</p>\n</div>\n</div>\n</div>";$("#append_book").append(t),colorid<6?colorid++:colorid=0}},function(e){e?Materialize.toast(e,2e3):Materialize.toast("loading books",2e3)})}l=r.phoneNumber,r.emailVerified||l?console.log("Email is verified"):$("#card-alert").show(),null!=r&&(a=r.email,null==(o=r.photoURL)&&(o="https://firebasestorage.googleapis.com/v0/b/egyan-27220.appspot.com/o/android-chrome-96x96.png?alt=media&token=8086b466-e7d4-4d37-bb0d-d53700371ce7"),console.log(o),t=r.emailVerified,i=r.uid,console.log(i),null==(e=r.displayName)&&(console.log("noname"),$("#noname").modal("open",{dismissible:!1}),n="https://firebasestorage.googleapis.com/v0/b/egyan-27220.appspot.com/o/Member.gif?alt=media&token=a5e035a3-53cd-471a-b977-3352735cc98f"),$("#namesub").click(function(){var l,s,d,c,p,u;""==$("#icon_prefix").val()||""==$("#icon_telephone").val()?Materialize.toast("Please enter your name",3e3):(e=$("#icon_prefix").val(),r.updateProfile({displayName:e,photoURL:o}).then(function(){Materialize.toast("Username updated",2e3),r.sendEmailVerification(),Materialize.toast("Please verify your email",900),$("#dispname").text(e),$("#dispname2").text(e),$("#photoP").attr("src",o),$("#ubadge").attr("src",n)},function(e){Materialize.toast("There is error "+e,3e3)}),l=i,s=e,d=a,c=t,p=o,u=n,firebase.database().ref("users/"+l).set({username:s,email:d,emailVerified:c,photoUrl:p,Badge:u}),$("#noname").modal("close"))})),$("#dispname").text(e),$("#mailiddisplay").text(a),$("#dispname2").text(e),$("#mailiddisplay2").text(a),d(),$("#loadbook").click(function(){d()}),$("#photoP").attr("src",o),console.log(o),$("#submitbook").click(function(){var o,i,t,n,s,d,c;$("#bookname").val().length>4&&$("#authorname").val().length>4&&$("#bookprice").val()>2?(o=r.uid,i=$("#bookname").val(),t=$("#authorname").val(),n=$("#contact").val(),s=$("#bookprice").val(),d={author:t,uid:o,contact:n,title:i,price:s,name:e,email:a,phoneNumber:l},(c={})["/books/"+firebase.database().ref().child("books").push().key]=d,firebase.database().ref().update(c).then(function(){Materialize.toast("New book added",2e3)}).catch(function(e){Materialize.toast("Please Verify Email "+e,2e3)})):Materialize.toast("Invaid/Data not filled properly",2e3)}),$("#submitqp").click(function(){var e=$("#qpfile").prop("files")[0];ref=firebase.storage().ref("user/"+r.uid+"/"+e.name),ref.put(e).then(function(e){console.log("Uploaded a blob or file!"),Materialize.toast("file Uploaded successfully",3e3)});var a=firebase.database().ref().child("papers").push().key,o={userid:r.uid,username:r.displayName,filename:e.name},i={};i["/papers/"+a]=o,firebase.database().ref().update(i).then(function(){Materialize.toast("Reference added to book",2e3)}).catch(function(e){Materialize.toast("Error"+e,2e3)})}),$("#previouspaper").click(function(){s()}),$("#previouspapers").click(function(){s()})}$(document).ready(function(){if($("#bookname").keyup(function(e){$("#bnap").text($("#bookname").val()),console.log("rrrrr")}),$("#authorname").keyup(function(e){$("#anap").text($("#authorname").val())}),$(".button-collapse").sideNav(),$(".collapsible").collapsible(),$(".modal").modal(),$("input.autocomplete").autocomplete({data:{Apple:null,Microsoft:null,Google:"https://placehold.it/250x250"}}),$("#booksend").click(function(){}),null==function(e){for(var a=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var t=o[i];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(a))return t.substring(a.length,t.length)}return null}("show")){var e=new Date;e.setTime(e.getTime()+864e7);var a="expires="+e.toUTCString();document.cookie="show=cookie_set;"+a+";path=/",$(".tap-target").tapTarget("open")}$(logout).click(function(){firebase.auth().signOut()})});
// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'

$("#submitnotes").click(function(){
	r=firebase.auth().currentUser
	var e=$("#notesfile").prop("files")[0];
	ref=firebase.storage().ref("user/"+r.uid+"/"+e.name);
	ref.put(e).then(function(e){console.log("Uploaded a blob or file!");
			Materialize.toast("file Uploaded successfully",3e3);
		});
});

function s(){
	console.log("loading qp function");
	$("#append_book").empty();
	firebase.database().ref("notes").on("value",function(e){
		var a=e.val()
		console.log("show notes");
		colorid=0;
		$("#append_book").empty();
		for(var o in a){
			var i=a[o].filename;
			t=a[o].userid;
			n=a[o].username;
			if(console.log(a[o]),a[o].userid==r.uid)
				{var l='<button type="button" onclick="close_paper(\''+a[o].userid+"','"+i+"')\" id="+o+' class="paper_close white-text waves-effect right red" aria-label="Close"> <span aria-hidden="true">×</span></button>'}
			else l="";
			var s='<div class="col s12 m3">\n<div class="card gradient-shadow '+["gradient-45deg-light-blue-cyan","gradient-45deg-purple-amber","gradient-45deg-purple-deep-orange","gradient-45deg-orange-amber","gradient-45deg-amber-amber","gradient-45deg-indigo-purple","gradient-45deg-purple-light-blue"][colorid]+' border-radius-3">\n'+l+'<div class="card-content center"> <div class="paper"><h6>'+i+"</h6> <br> Submited by "+n+' <br><br> <a class="btn" onclick="download_paper(\''+i+"','"+t+"','"+n+"')\" >Download Paper</a> </div> </div>\n</div>\n</div>";
		}
	});
}
$('#notesloadbtn').click(function() {
	console.log('notesbtn click');
	s();
	console.log('after s');
});