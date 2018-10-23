var todoService = (function(){

  var path = "http://localhost:8080/todo/";

  function create(obj, callback){
    console.log(obj);
    $.ajax({
      type: 'post',
      data: JSON.stringify(obj), //받은 데이터를 JSON 형태로
      contentType: "application/json; charset=utf=8",
      success: function(result, status, xhr){
        //데이터가 전달도미ㅕㄴ 콜백함수 호출
        callback(result);
      }
    });
  }
  return {create: create}
  })();
