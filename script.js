function predict() {
    var bed = document.getElementById("bed").value ;
    var bath = document.getElementById("bath").value ;
    var living = document.getElementById("living").value ;
    var lot = document.getElementById("lot").value ;
    var floor = document.getElementById("floor").value ;
    var waterfront = document.getElementById("waterfront").value ;
    var view = document.getElementById("view").value ;
    var condition = document.getElementById("condition").value ;
    var year_built = document.getElementById("year_built").value ;
    var year_renovated = document.getElementById("year_renovated").value ;
    var zipcode = document.getElementById("zipcode").value ;
    var year_sold = document.getElementById("year_sold").value ;
    var month_sold = document.getElementById("month_sold").value ;

    document.getElementById("predict").innerHTML = 

    bed*(	-56024.756064)
    +bath*	60835.739893
    +living*	275.254481
    +lot*	(-0.340061)
    +floor	*59586.504682
    +waterfront	*509080.734050
    +view	*59717.481040
    +condition*	16257.950428
    +year_built	*(-2846.279451)
    +year_renovated	*24503.905173
    +zipcode	*(-21.497227)
    +year_sold*	27150.898226
    +month_sold*	585.632082

;
}