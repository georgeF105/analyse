webpackJsonp([8],{22:function(a,e,l){var i=l(2);a.exports=function(){function a(){l.e(12,function(a){var e=[a(50)];(function(a){i.load(a),$(".modal").modal("hide"),i.loadPage.apply(i,o)}).apply(null,e)})}function e(){var a=$("#file")[0].files,e=new FileReader;e.readAsText(a[0]),e.onload=function(){var a=e.result;const l=new Worker("parse-json.worker.js");l.postMessage(a),l.onmessage=function(a){const e=a.data;i.load(e),$(".modal").modal("hide"),i.loadPage.apply(i,o)}},e.onerror=function(a){alert(a)}}var o=Array.prototype.slice.call(arguments);document.title="upload",$("body").html(l(48)()),$(".modal").modal({show:!0}),$("#file").change(e),$("#example").click(a)}},48:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<nav class="navbar navbar-default"><div class="container-fluid"><ul class="nav navbar-nav"><li><a href="">Open</a></li><li><a href="#home">Home</a></li><li><a href="#modules">Modules</a></li><li><a href="#chunks">Chunks</a></li><li><a href="#assets">Assets</a></li><li><a href="#warnings">Warnings</a></li><li><a href="#errors">Errors</a></li><li><a href="#hints">Hints</a></li></ul></div></nav><div id="sigma-modules" style="width: 99%; height: 500px; display:none;"></div><div id="sigma-chunks" style="width: 99%; height: 500px; display:none;"></div><div class="page"></div><div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Upload webpack stats</h4></div><div class="modal-body"><div class="form-group"><label for="file">JSON file</label><input type="file" id="file" class="form-control"/></div><div class="form-group"><label for="example">Example</label><div><button type="btn btn-default" id="example">Use example</button></div></div></div><div class="modal-footer"></div></div></div></div>')}return buf.join("")}}});