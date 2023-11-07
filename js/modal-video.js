function alignModal(){
  var modalDialog = $(this).find(".modal-dialog");
  modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
function modalVideo(idVideo, idModal) {
  console.log(idVideo);
  var url = $("#"+idVideo).attr('src');
  $("#"+idModal).on('hide.bs.modal', function(){
      $("#"+idVideo).attr('src', '');
  });
  $("#"+idModal).on('show.bs.modal', function(){
      $("#"+idVideo).attr('src', url+"&amp;autoplay=1");
  });

  $(".modal").on("shown.bs.modal", alignModal);
  $(window).on("resize", function(){
      $(".modal:visible").each(alignModal);
  });   
}
$(document).ready(function(){
  modalVideo("video1", "modal1");
  modalVideo("video2", "modal2");
  modalVideo("video3", "modal3");
});