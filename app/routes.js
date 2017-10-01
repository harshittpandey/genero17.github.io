module.exports = function(app,passport){
  app.get('/',function(req,res){
    res.render('index.ejs') ;
  });
  //Login
  app.get('/login',function(req,res){
    res.render('login.ejs',{message : req.flash('loginMessage')}) ;
  });
  // process the login form
  // app.post('/login',do all passport stuff)
  //SignUp
  app.get('/signup',function(req,res){
    res.render('signup.ejs',{message : req.flash('signupMessage')}) ;
  });
  //Profile Section
  app.get('/profile',isLoggedIn,function(req,res){
    res.render('profile.ejs',{
      user : req.user
    });
  });
  //Logout
  app.get('/logout',function(req,res){
    req.logout ();
    res.redirect('/') ;
  });
  //process SignUp
  app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};

function isLoggedIn(req , res , next){
  if(req.isAuthenticated()){
    return next() ;
  }
  return redirect('/') ;
}
