const uploadBtn = document.getElementById("upload");
const fileUpload = document.getElementById("fileUpload");
function upload(){
    // checking file type
    var regex = new RegExp(/^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/);
    // console.log(fileUpload.value);
    if(regex.test(fileUpload.value)){
        // check if brower supports HTML 5 FileReader
        if(typeof(FileReader)!="undefined"){
            var reader = new FileReader();
            // readAsBinaryString is used to start reading the content of specified file and when read is done result attr. contains the raw binary data
            // Brower except Internet Explorer
            if(reader.readAsBinaryString){
                reader.onload = function(e){
                    processExcel(e.target.result);
                }
                reader.readAsBinaryString(fileUpload.files[0]);
            }else{
                reader.onload = function(e){
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for(var i=0;i<bytes.byteLength;i++){
                        data+=String.fromCharCode(bytes[i]);
                    }
                    processExcel(data);
                }
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        }else{
            alert("This Browser doesn't support HTML 5");
        }
    }else{
        alert("Please Upload valid excel file");
    }
}
function processExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {type: 'binary'});
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];
    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    var dataToSend=excelRows;
    dataToSend=JSON.stringify(dataToSend);
    // console.log(dataToSend,typeof(dataToSend));
    document.getElementById("data").setAttribute('value',dataToSend);
    document.getElementById("tick").removeAttribute('hidden');
};
uploadBtn.onclick=function(){
    upload();
}