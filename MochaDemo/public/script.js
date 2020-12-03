window.onload=()=>{

    const km = $('#kms')
    const min =$('#min')

    const btn =$('#btn')
    const fareBox = $('#fare')

    btn.click(()=>{
        $.post('/calfare',{
            min:min.val(),
            km:km.val()
        },(data)=>{
            fareBox.text(data.fare)
        })
    })

}