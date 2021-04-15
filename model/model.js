var userVarName = "Variable";
var homeContent = `<section class="promo-tours">
<div class="promo">
    <!-- ISREAL -->
    <div class="isreal">
        <div class="text">
            <div class="top">
                <h1>ISRAEL</h1>
                <p>FROM $1000</p>
            </div>
            <div class="blue-button"> <a id = "israel" href="#">LEARN MORE</a></div>
    </div>
    </div>
</div>
<div class="promo">
    <!-- USA -->
    <div class="usa">
        <div class="text">
            <div class="top">
                <h1>USA</h1>
                <p>FROM $1500</p>
            </div>
            <div class="blue-button"> <a id = "usa" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
<div class="promo">
    <!-- AUSTRALIA -->
    <div class="aust">
        <div class="text">
            <div class="top">
                <h1>AUSTRALIA</h1>
                <p>FROM $1800</p>
            </div>
            <div class="blue-button"> <a id = "aus" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
</section>

<!-- =======================BOOKING FORM====================== -->

<section class="booking-form">
<div class="title">BOOKING FORM</div>

<div class="row1">
    <div class="space1">
    <!-- <div class="text">name...</div> -->
    <input type="text" size="5" maxlength="30" placeholder="name..." >
    </div>
    <div class="space2">
    <!-- <div class="text">email...</div> -->
    <input type="text" size="5" maxlength="40" placeholder="email..." >
        
    </div>
</div>

<div class="row1">
    <div class="space1">
    <!-- <div class="text">country...</div> -->
    <input type="text" size="5" maxlength="35" placeholder="country..." >

    </div>
    <div class="space2">
    <!-- <div class="text">hotel...</div> -->
    <input type="text" size="5" maxlength="50" placeholder="hotel..." >
    </div>
</div>

<div class="row2">
    <div class="space1">Check-in</div>
    <div class="space2">
        <div class="enter">
    <!-- <div class="text">05/10/2020</div> -->
    <input type="text" size="5" maxlength="10" placeholder="05/10/2020" >
        </div>
        <div class="calendar"></div>
    </div>
</div>

<div class="row2">
    <div class="space1">Check-out</div>
    <div class="space2">
        <div class="enter">
    <!-- <div class="text">05/20/2020</div> -->
    <input type="text" size="5" maxlength="10" placeholder="05/20/2020" >

        </div>
        <div class="calendar"></div>
    </div>
</div>

<div class="row3">
    <div class="c1">
        <div class="person">Adult</div>
        <div class="select">
            <div class="number">
                <input type="text" size="5" maxlength="2" placeholder="2" >
            </div>
            <div class="arrow">
                <!-- <select name="options" id="options">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> -->
            </div>
        </div>
    </div>
    <div class="c1">
        <div class="person">Children</div>
        <div class="select">
            <div class="number">
                <input type="text" size="5" maxlength="2" placeholder="0" >
            </div>
            <div class="arrow">
                <!-- <select name="options" id="options">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> -->
            </div>
        </div>
    </div>
    <div class="c1">
        <div class="person">Rooms</div>
        <div class="select">
            <div class="number">
                <input type="text" size="5" maxlength="2" placeholder="1" >
            </div>
            <div class="arrow">
                <!-- <select name="options" id="options">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> -->
            </div>
        </div>
    </div>
</div>

    <div class="message">
    <!-- <div class="text">message...</div> -->
    <input type="text" size="5" maxlength="500" placeholder="message..." >

    </div>

    <div class="submit"> <a href="#">Submit</a>
        </div>
        <p></p>
</section>` 
var aboutContent = `<div class="about">
<div class="about-top-section">
    <h1 class="underline">ABOUT:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>


<div class="about-bottom-section">
    <h3 class="underline">CLIENT QUOTES:</h3>
    <div class="client">
        <div class="client-image client1">
        </div>
        <div class="client-quote">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div class="client-name">- Miranda Brown</div>
        </div>
    </div>
    <div class="client">
        <div class="client-image client2">
        </div>
        <div class="client-quote">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div class="client-name">- Johnathan wes</div>
        </div>
    </div>
</div>
</div>`; 

var toursContent = `<div class="tours">
<h1>TOURS:</h1>
</div>

<!----------- PROMO-TOURS -------------->
<!-- ===========FRIST ROW============== -->
<section class="promo-tours" style="margin: 50px auto 0 auto">
<div class="promo">
    <!-- ISREAL -->
    <div class="isreal">
        <div class="text">
            <div class="top">
                <h1>ISRAEL</h1>
                <p>FROM $1000</p>
            </div>
            <div class="blue-button"> <a id = "israel" href="#">LEARN MORE</a></div>
    </div>
    </div>
</div>
<div class="promo">
    <!-- USA -->
    <div class="usa">
        <div class="text">
            <div class="top">
                <h1>USA</h1>
                <p>FROM $1500</p>
            </div>
            <div class="blue-button"> <a id = "usa" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
<div class="promo">
    <!-- AUSTRALIA -->
    <div class="aust">
        <div class="text">
            <div class="top">
                <h1>AUSTRALIA</h1>
                <p>FROM $1800</p>
            </div>
            <div class="blue-button"> <a id = "aus" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
</section>

<!-- ==================SECOND ROW=============== -->
<section class="promo-tours" style="margin: 50px auto 0 auto">
<div class="promo">
    <!-- NEW ZEALAND -->
    <div class="newzealand">
        <div class="text">
            <div class="top" style="padding-top: 20px; padding-bottom: 10px;">
                <h1>NEW ZEALAND</h1>
                <p>from $1200</p>
            </div>
            <div class="blue-button"> <a id = "nz" href="#">LEARN MORE</a></div>
    </div>
    </div>
</div>
<div class="promo">
    <!-- FRANCE -->
    <div class="france">
        <div class="text">
            <div class="top">
                <h1>FRANCE</h1>
                <p>FROM $2500</p>
            </div>
            <div class="blue-button" > <a id = "france" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
<div class="promo">
    <!-- EGYPT -->
    <div class="egypt">
        <div class="text">
            <div class="top">
                <h1>EGYPT</h1>
                <p>FROM $900</p>
            </div>
            <div class="blue-button"> <a id = "egypt" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
</section>

<!-- ==========THIRD ROW=============== -->
<section class="promo-tours" style="margin: 50px auto 0 auto">
<div class="promo">
    <!-- JAPAN -->
    <div class="japan">
        <div class="text">
            <div class="top">
                <h1>JAPAN</h1>
                <p>FROM $1300</p>
            </div>
            <div class="blue-button"> <a id = "japan" href="#">LEARN MORE</a></div>
    </div>
    </div>
</div>
<div class="promo">
    <!-- CANADA -->
    <div class="canada">
        <div class="text">
            <div class="top">
                <h1>CANADA</h1>
                <p>FROM $2000</p>
            </div>
            <div class="blue-button"> <a id = "cana" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
<div class="promo">
    <!-- U.A.E -->
    <div class="uae">
        <div class="text">
            <div class="top">
                <h1>U.A.E</h1>
                <p>FROM $1800</p>
            </div>
            <div class="blue-button"> <a id = "uae" href="#">LEARN MORE</a></div>
            </div>
    </div>
</div>
</section>`; 
var specialoffersContent = `<section class="special-offers">
<h1>SPECIAL OFFER(S):</h1>

<div class="offer">
    <div class="image"></div>
    <div class="text">
        <h1>BARCELONA, SPAIN</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="learn-more">
            <h3>LEARN MORE</h3>
        </div>
    </div>
    <h2>(20% off!)</h2>
</div>

<div class="offer">
    <div class="image2"></div>
    <div class="text">
        <h1>BANGKOK, THAILAND</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="learn-more">
            <h3>LEARN MORE</h3>
        </div>
    </div>
    <h2>(10% off!)</h2>
</div>
</section>`; 

var blogContent = `<section class="blog">
<h1>BLOG:</h1>
<div class="post">
    <div class="bluesquare">
        <h3>06</h3>
        <h2>JUN</h2>
    </div>

    <div class="rightside">
        <div class="image"></div>
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
</div>

<div class="post">
<div class="bluesquare">
    <h3>23</h3>
    <h2>JUL</h2>
</div>

<div class="rightside">
    <div class="image"></div>
    <h4>Sed et persipiatis unde omnis iste natus</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>
</div>
</section>`;

var contactContent = `<div class="contact">
<h1> Contact Us:</h1>
<div class="fill">
    <div class="left">
        <div class="image"></div>
        <div class="text">
            <p>travel-fly Inc.</p>
            <p>8901 Marmora Road,</p>
            <p>Glasgow, D04 89GR.</p>
            <p>Freephone: +1 800 559 6580</p>
            <p>Telephone: +1 800 603 6035</p>
            <p>FAX: +1 800 889 9898</p>
            <p>E-mail: mail@travelfly.org</p>
        </div>
    </div>

    <div class="right">
        <div>
            <input type="text" size="5" maxlength="40" placeholder="Your name..." >
        </div>
        <div>
            <input type="text" size="5" maxlength="40" placeholder="Email Address..." >
        </div>
        <div>
            <input type="text" size="5" maxlength="40" placeholder="Company..." >
        </div>
        <div>
            <input style="height: 200px; padding-bottom: 150px;" type="text" size="5" maxlength="40" placeholder="Message..." >
        </div>
        <div class="button">
            <a href="contact.html">
                SEND MESSAGE
            </a>
        </div>
    </div>
</div>
</div>`;

var ausContent = `<div class="tour-package aus">
<div class="top">Australia tour package</div>
<div class="bottom">STARTING FROM $1800 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture aus1"></div>
<div class="picture aus2"></div>
<div class="picture aus3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var canaContent = `<div class="tour-package cana">
<div class="top">Canada tour package</div>
<div class="bottom">STARTING FROM $2000 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture cana1"></div>
<div class="picture cana2"></div>
<div class="picture cana3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var egyptContent = `<div class="tour-package egypt">
<div class="top">Egypt tour package</div>
<div class="bottom">STARTING FROM $900 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture egypt1"></div>
<div class="picture egypt2"></div>
<div class="picture egypt3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>


<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var franceContent = `<div class="tour-package france">
<div class="top">France tour package</div>
<div class="bottom">STARTING FROM $2500 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture france1"></div>
<div class="picture france2"></div>
<div class="picture france3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var israelContent = `<div class="tour-package israel">
<div class="top">Israel tour package</div>
<div class="bottom">STARTING FROM $1000 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture israel1"></div>
<div class="picture israel2"></div>
<div class="picture israel3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var japanContent = `<div class="tour-package japan">
<div class="top">Japan tour package</div>
<div class="bottom">STARTING FROM $1300 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture japan1"></div>
<div class="picture japan2"></div>
<div class="picture japan3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>


<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var nzContent = `<div class="tour-package nz">
<div class="top">New Zealand tour package</div>
<div class="bottom">STARTING FROM $1200 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture nz1"></div>
<div class="picture nz2"></div>
<div class="picture nz3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var uaeContent = `<div class="tour-package uae">
<div class="top">U.A.E tour package</div>
<div class="bottom">STARTING FROM $3000 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture uae1"></div>
<div class="picture uae2"></div>
<div class="picture uae3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

var usaContent = `<div class="tour-package usa">
<div class="top">U.S.A tour package</div>
<div class="bottom">STARTING FROM $1500 (prices may vary)</div>
</div>

<div class="picture-display">
<div class="picture usa1"></div>
<div class="picture usa2"></div>
<div class="picture usa3"></div>
</div>

<div class="day">
<div class="day-info">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #2:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="day-info">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>

<div class="blue-button">
<a href="#">BOOK NOW</a>
</div>`;

export function getPageContent(pageId , callback) {
    $("#app").html(eval(pageId));
    if (callback) {
        callback();
    }
    }



export function getName(){
    console.log("Marielle");
}

export function getLastName() {
    console.log("Harrell");
}

