$(document).ready(function () {
var tooltipSpan = document.getElementById('tooltip');
window.onmousemove = function (e) {
    var x = e.clientX,
    y = e.clientY;
    tooltipSpan.style.top = (y + 20) + window.pageYOffset + 'px';
    tooltipSpan.style.left = (x + 20) + window.pageXOffset + 'px';
  };
  $("#tooltip").hide();
  $(".station").hover(function(){
    $("#tooltip").show();
    console.log(this);
    $("#tooltip").html(this.dataset.text);
  }, function () {
  $("#tooltip").hide();
  })


$(".cls-27").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Figueroa Line train bound for Exposition/Figueroa.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-29").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Jefferson Line train bound for Galen Center.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-30").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Hoover Line train bound for Party District.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-31").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the McClintock Line train bound for Village/Northern Religious District.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-32").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Vermont Line train bound for Expo/Vermont.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-33").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Exposition Line train bound for Expo/Vermont.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-34").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the West 34th Line train bound for International District.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-26").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Childs Line train bound for Fertitta Hall.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-35").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Pardee Line train bound for Courthouse District.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-36").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Trousdale Parkway Line train bound for Expo Park/USC.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-37").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the West 37th Line train bound for Innovation.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-38").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Hellman Line train bound for Hellman Residences.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-39").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Watt Line train bound for Watt Way.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-40").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the McCarthy Line train bound for McCarthy Way.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-41").hover(function(){
  $("#tooltip").show();
    $("#tooltip").html("Thank you for using the USC Metro. This is is the Downey Line train bound for Campus Center.");
  }, function(){
  $("#tooltip").hide();
})

$(".cls-28").hover(function(){
  $("#tooltip").html("Thank you for using the USC Metro. This is is the Trousdale-Bloom Line express train bound for Gerontology.");
  var img = $('<img id="dynamic">');
  img.attr('src', 'a.jpg');
  img.appendTo('#tooltip');
  $("#tooltip").show();
  }, function(){
  $("#tooltip").hide();
})



// $("#Fertitta_Hall").hover(function(){
//    $("#Fertitta_Hall").show();
//    $("#Fertitta_Hall").attr("src", "fertitta.jpg");
//    })

//   $("#tooltip").hide();
//   $("#Exposition_Figueroa").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the ICON Plaza. 🍽Starbucks, Wing Stop🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//   $("#tooltip").hide();
//   $("#Courthouse_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Gould School of Law. ");
//   }, function () {
//   $("#tooltip").hide();
//   })
  
//   $("#tooltip").hide();
//   $("#Expo_Park_USC").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Please transfer here for the LA Metro Rail Expo Line. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//   $("#tooltip").hide();
//   $("#Art_Museum").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Fisher Museum of Art. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Watt_Way").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Watt Way Entrance. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Expo_Vermont").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Please transfer here for the LA Metro Rail Expo Line. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//   $("#tooltip").hide();
//   $("#Tommy_Trojan").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit Trousdale Exit for Bovard Auditorium. Exit Childs Exit for Campus Center. Please transfer here for the Childs Line.");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Business_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Levanthal School of Accounting and Marshall School of Business. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#WPH-Taper").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Rossier School of Education and Taper Hall. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Hellman_Residences").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Pardee Tower, Marks Tower, Marks Hall, and Trojan Hall residences. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#McCarthy_Way").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for McCarthy Way entrance and New North Residential College. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#International_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the International Academy and Office of International Services. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("Galen_Center").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Galen Center. ");
//   }, function () {
//   $("#tooltip").hide();
//   })


//   $("#Widney_Alumni_House").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the historical Widney Alumni House and the Price School of Public Policy. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//   $("#tooltip").hide();
//   $("#Parkside-International").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Parkside International residences. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Downey_Way").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Downey Way entrance. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Kaprelian").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Viterbi School of Engineering's Kaprelian Hall. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Vermont_Jefferson").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the University Gardens residences. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Northern_Religious_Distric").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Village Target, Trader Joes, the Caruso Catholic Center and the Hillel Jewish Center. 🍽Rock & Reilly's, Saola, etc.🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Cinematic_Arts").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the School of Cinematic Arts. 🍽Coffee Bean & Tea Leaf🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Fields").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for Cromwell Field and Brittingham Field. 🍽Little Galen🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Sports_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for Cromwell Field and Dedeaux Stadium. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Gerontology").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the School of Gerontology. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Parkside").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Parkside residences. 🍽Parkside Dining Hall🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Innovation").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Iovine and Young Academy. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Industrial Zone-North").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Mudd Building and Olin Hall of Engineering. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Industrial Zone-Central").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for Vivian Hall, Loker Hydrocarbon Research Institute, Dept. of Chem. Engineering and Material Sciences. 🍽Tutor Hall Cafe🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Industrial Zone-East").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Dept. of Aerospace and Mechanical Engineering. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#New_Media").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Wallis Hall of the Annenberg School of Journalism. 🍽Annenberg Cafe🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Cinematic_Arts").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Annenberg School of Journalism. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#Dance").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Kaufman School of Dance. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#JEP_KSI").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Joint Educational Project and the Korean Studies Institute. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

//  $("#tooltip").hide();
//   $("#United_Nations").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Von Kleinsmid Center and Social Sciences Building. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#McCarthy_Quad").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the McCarthy Quad, Birnkrant Residences, and Leavey Library. 🍽Everybody's Kitchen, Starbucks🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Doheny_Library").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Doheny Library, Alumni Park and Hubbard Hall of Administration. 🍽Literatea🍽");
//   }, function () {
//   $("#tooltip").hide();
//   }) 

// $("#tooltip").hide();
//   $("#Campus_Center").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Ronald Tutor Campus Center. 🍽The Habit, Panda Express, CPK, etc.🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Party_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for The Row, the collection of fraternity and sorority houses. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Shrine_Auditorium").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Shrine Auditorium and USC Magnet School. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Dentistry").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the School of Dentistry. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Religious_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the University Religious Center and University Church. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Music_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Thornton School of Music. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Arts_District").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("Exit here for the Roski School of Art and School of Architecture. 🍽C&G Juice🍽");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Figueroa_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This heavy rail line traverses the Figueroa Corridor, towards Los Angeles Downtown. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Jefferson_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This heavy rail line links the Village with the Galen Center area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Hoover_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This heavy rail line links the Village and Party District. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#McClintock_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major heavy rail line links the Village with the Parkside area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Vermont_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This heavy rail line links the northern area with the LA Metro Rail Expo Line. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Exposition_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major rail line links the various southern areas with Downtown and Santa Monica. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#West_34th_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major bus rapid transit line links the International District with Cinematic Arts. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Childs_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major rail line links the Fertitta Hall with the Sports District area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Pardee_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This automated guideway transit line links the Courthouse District with the Widney Alumni House. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Trousdale_Parkway_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major heavy rail line links the northern and southen areas and provides a transfer to the LA Metro Rail Expo Line. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#West_37th_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This automated guideway transit line links the Parkside area with the Iovine and Young Academy. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Hellman_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major heavy rail line links the Sports District area with the South Residential College. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Watt_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This major north-south line links Watt Way Entrance to the Kaufman Dance area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#McCarthy_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This short automated guideway transit line links the McCarthy Way Entrance with the McCarthy Quad area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Downey_Line").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This automated guideway transit line links the Downey Way Entrance with the Campus Center. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

// $("#tooltip").hide();
//   $("#Trousdale_Parkway_Bloom_Walk_Express").hover(function(){
//   $("#tooltip").show();
//         $("#tooltip").html("This express line links the JEP KSI area with the Gerontology area. ");
//   }, function () {
//   $("#tooltip").hide();
//   })

});