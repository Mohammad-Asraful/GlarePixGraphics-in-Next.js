<!DOCTYPE html>
<html>

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="images/favicon.png" type="image/png">

  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>GPG</title>

  <!-- slider stylesheet -->
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />

  <!-- bootstrap core css -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  <!-- fonts style -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,700|Roboto:400,700&display=swap" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet" />
  <!-- responsive style -->
  <link href="css/responsive.css" rel="stylesheet" />
  <link rel="stylesheet" href="dist/image-uploader.min.css">
  <link href="https://fonts.googleapis.com/css?family=Lato:300,700|Montserrat:300,400,500,600,700|Source+Code+Pro&display=swap"
  rel="stylesheet">
  <style>
    body {
      background-color: #eeeeee;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    input.largerCheckbox {
            width: 30px;
            height: 30px;
        }
    .image-uploader {
      min-height: 10rem;
      border: 1px solid #727272 !important;
      position: relative;
    }
    form > button {
          /* -webkit-appearance: none; */
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          padding: 1rem 2rem;
          border: none;
          background-color: #50ce7d;
          color: #fff;
          text-transform: uppercase;
          display: block;
          font-size: 16px;
          margin-top: 40px;
        }
        .sub_page label{
          font-size:17px !important;
        }
        .footer_a a{
          font-size:16px !important;
        }
        .footer_bottom {
          font-size:16px !important;
        }
  </style>
  <script src="jquery-3.3.1.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body class="sub_page">
  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="home.html">
            <img src="images/logo-small.png" alt="">
            <span>
              Glare Pix Graphics
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="prices.html">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="free-trial.php">Free Trials</a>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
  </div>


  <!-- news section -->

  <section class="news_section layout_padding">
    <div class="container">
      <div class="d-flex flex-column align-items-center" >
        <div class="custom_heading-container">
          <h2 style="border-bottom:1px black solid;color:green">
              GPG FREE TRIAL
            <!--<img src="images/free-trail-green.png" alt="" height="60" width="300">-->
          </h2>
        </div>
        <!-- <font size="5"> -->
      </div>
      <br>
      <form class="form-horizontal" action="" id="contact-form" method="post" enctype="multipart/form-data">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="full_name">Full Name</label>
            <input type="text" required class="form-control" id="full_name" name="full_name" placeholder="Input Your Full Name">
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" required class="form-control" id="inputEmail4" name="email" placeholder="Input Your Email">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="phone_number">Phone Number</label>
            <input type="number" required class="form-control" id="phone_number" name="phone_number" placeholder="Input Your Phone Number">
          </div>
          <div class="form-group col-md-6">
            <label for="country">Country</label>
            <input type="text" class="form-control" id="country" name="country" placeholder="Input Your Country">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="company_name">Company Name</label>
            <input type="text" class="form-control" id="company_name" name="company_name" placeholder="Input Your Company Name">
          </div>
          <div class="form-group col-md-6">
            <label for="website">Website</label>
            <input type="text" class="form-control" id="website" name="website" placeholder="Input Your Website">
          </div>
        </div>

        <div class="form-group">
          <label for="website" style="border-bottom: 1px solid rgb(9, 9, 9);">Select service: </label>
          <br>

          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox1" name="techno[]" value="Clipping Path Service">
            <label class="form-check-label" for="inlineCheckbox1">Clipping Path Service</label>
          </div>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox2" name="techno[]" value="Multi path service">
            <label class="form-check-label" for="inlineCheckbox2">Multi path service </label>
          </div>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox3" name="techno[]" value="Photo Retouching Service">
            <label class="form-check-label" for="inlineCheckbox3">Photo Retouching Service</label>
          </div>
          <br>
            <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox40" name="techno[]" value="Jewelry Retouching">
            <label class="form-check-label" for="inlineCheckbox40">Jewelry Retouching (<span style="color:red"> One file will be accepted for this service</span>)</label>
          </div>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox7" name="techno[]" value="Ghost Mannequin Service">
            <label class="form-check-label" for="inlineCheckbox7">Ghost Mannequin Service</label>
          </div>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox4" name="techno[]" value="Shadow Creation Service">
            <label class="form-check-label" for="inlineCheckbox4">Shadow Creation Service </label>
          </div>
          <br>
          <div class="form-check form-check-inline">
            <input class="form-check-input largerCheckbox" type="checkbox" id="inlineCheckbox5" name="techno[]" value="Color Correction Service">
            <label class="form-check-label" for="inlineCheckbox5">Color Correction Service</label>
          </div>
        </div>
        <div class="input-field">
          <label class="active">Upload Files (Upload Your Files (max 300mb/file, 5files only)
            )</label>
        <div class="input-images-1" style="padding-top: .5rem;"></div>
            <br>
        <div class="form-group">
          <label for="drive_link">If the size of your Images is more than 300mb then share your images link here from
            your cloud like Google Drive, Wetransfer.</label>
          <input type="text" class="form-control" id="drive_link" name="drive_link" placeholder="Drive Link">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Your Job Instruction</label>
          <textarea class="form-control" name="job_instraction" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button type="submit" name="submit" class="btn btn-primary btn-lg">Submit</button><br><br>
        We have 24/7 customer support. For any kind of free trial problem please Go to contact us.
      </div>

      </form>
  </section>

  <!-- end news section -->


  <!-- info section -->
  <section class="info_section layout_padding">
      <div class="container">
        <div class="info_social">
          <div>
            <a
              target="_blank"
              href=" https://www.facebook.com/glarepixgraphics">
              <img src="images/facebook.png" alt="" />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://twitter.com/PixGpg">
              <img src="images/twitter.png" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/paul-halder-49156023b/">
              <img src="images/linkedin.png" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/glarepixgraphics/">
              <img src="images/instagram.png" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://join.skype.com/invite/vBCvGeEi5HwJ">
              <img src="images/skype.png" alt="" />
            </a>
          </div>
        </div>

        <div>
          <p>
            <a href="terms-of-use.html" style="color: white"
              >Terms of Use&emsp;</a
            >
            <a href="policies.html" style="color: white"
              >Privacy policies&emsp;</a
            >
            <a href="about.html" style="color: white">About Us&emsp;</a>
            <a href="contact.html" style="color: white">Contact Us&emsp;</a>
          </p>
        </div>
      </div>
    </section>

  <!-- end info_section -->

  <!-- footer section -->
  <section class="container-fluid footer_section">
    <p class="footer_bottom">
      &copy; 2022 All Rights Reserved By
      <a href="">GPG Templates</a>
    </p>
  </section>
  <!-- footer section -->

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script type="text/javascript" src="dist/image-uploader.min.js"></script>

</body>
<script type="text/javascript">
        // $(document).ready(function(){
        //      $("#inlineCheckbox40").on('change', function() {
        //     if ($(this).is(":checked")) {
                
        //     } else {
                
        //     }
        // });
        // });
$('.input-images-1').imageUploader({
    maxSize: 300 * 1024 * 1024,
    maxFiles: 5,
    extensions: ['.jpg','.jpeg','.png','.PNG','.psd','.tiff','.tif'],
    // mimes: ['image/jpeg','image/png','image/vnd.adobe.photoshop','image/tiff','image/tif'],
    
});
  </script>
</html>



