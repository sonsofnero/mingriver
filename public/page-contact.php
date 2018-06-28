<?php
include('header.php');
include('components/header.php');
?>

<!--Start: Breadcrumb-->
<section class="breadcrumb">
  <div class="centerizer">
    <ul class="breadcrumb-list">
      <li><a href="">Home</a></li>
      <li>The Distillery</li>
    </ul>
  </div>
</section>
<!--End: Breadcrumb-->


<!--Start: Body Content-->
<section class="contact post-body post-body__pad">
  <div class="centerizer">

    <div class="text-block">

  		<h1 class="h1">Contact Us</h1>

  		<p>In China one never drinks baijiu alone. Company is to be shared and savored. In this spirit (pun definitely intended) we would love to hear from you. Fill out the contact form below, or <a href="">e-mail us directly</a></p>

  		<hr>

  		<form>
  			<label>First Name <span class="required">*</span></label>
  			<input class="form-label" type="text" id="fname" name="firstname" value="Your First Name" onfocus="if (this.value == 'Your First Name') {this.value=''}" >

  			<label>Last Name <span class="required">*</span></label>
  			<input class="form-label" type="text" id="lname" name="lastname" value="Your Last Name" onfocus="if (this.value == 'Your Last Name') {this.value=''}">

  			<label>Company Name <span class="required">*</span></label>
  			<input class="form-label" type="text" id="cname" name="companyname" value="Company Name Here" onfocus="if (this.value == 'Company Name Here') {this.value=''}">

  			<label>Phone Number <span class="required">*</span></label>
  			<input class="form-label" type="text" id="pnumber" name="phonenumber" value="Your Phone Number" onfocus="if (this.value == 'Your Phone Number') {this.value=''}">

  			<label>Email Address <span class="required">*</span></label>
  			<input class="form-label" type="text" id="email" name="emailaddress" value="Your Email" onfocus="if (this.value == 'Your Email') {this.value=''}">

  			<label>Message</label>
  			<textarea id="subject" name="subject" placeholder="Your Message Here" onfocus="if (this.value == 'Your Message Here') {this.value=''}" style="height:200px"></textarea>

  			<input class="solid-btn solid-btn--red" type="submit" value="Submit Message">
  		</form>

      <!--divider-->
      <hr>
      <!--/divider-->

      <div class="quote">
        <blockquote>“When a restaurant with the name Opium opens and starts selling Baijiu we’re sorely tempted to file it in the bin without a second look."</blockquote>
        <span class="quote-caption">Simon Dang / CEO</span>
      </div>

    </div>
	</div>
</section>
<!--End: Body Content-->


<?php
include('components/footer.php');
include('footer.php');
?>
