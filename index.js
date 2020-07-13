function takeANumber(line, name)
{
  var counter = 0;
  
  for (let i = 0; i < name.length; i++)
  {
    katzDeliLine[counter] = name[counter];
  }
  
  return `Welcome, ${name[counter]}. You are number ${katzDeliLine} in line.`
}