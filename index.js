function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  
  var serving = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${serving}.`;
  
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  
  var counter = 1;
  var status = "The line is currently: ";
  
  
  for (let i = 0; i < katzDeliLine.length; i++)
  {
    list.concat(`${counter}. ${katzDeliLine[i]} )`;
  }
}