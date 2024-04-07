//array of current users
let current_users = ["IronMan", "Thor", "Loki", "BlackWidow", "CaptainAmerica"];

//array of new users including some members of curent users
let new_users = ["Flash", "Thor", "GreenArrow", "BlackWidow", "Superman"];

//Loop  to see if username is alredy taken or not
new_users.forEach((new_one_user) => {
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );

  //print message for taken or available usernames
  if (our_condition) {
    console.log(`Sorry ${new_one_user} is already taken`);
  } else {
    console.log(`This username ${new_one_user} is available`);
  }
});
