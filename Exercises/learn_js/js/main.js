function find_fib(n)
{
    if (n<=2) return 1
    else return find_fib(n-2)+find_fib(n-1)
}
function invoke_fib(n, pannel)
{
    fib=find_fib(n)
    pannel.innerText=fib
}
function invoke_list_fib(n, pannel)
{
    pannel.innerHTMl=""
    for(i=1;i<=n;i++)
    {
        r=Math.floor(Math.random()*256)
        g=Math.floor(Math.random()*256)
        b=Math.floor(Math.random()*256)
        bg="background-color:rgb("+r+";"+g+";"+b+";)"
        p="<p>"+find_fib(i)+"</p>"
        pannel.innerHTML+=p
    }
}
function get_detail_product_infor()
{
    //alert(myform.item_input.value)
    s=myform.item_input.value
    p1=s.indexOf(";")
    p2=s.lastIndexOf(";")
    p_name=s.substring(p1+1,p2)
    td_name.innerText=p_name
    p_id=s.substring(0,p1)
    td_id.innerText=p_id
    p_price=s.substring(p2+1)
    td_price.innerText=p_price
}