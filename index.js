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
  
  var list = [];
  
  for (let i = 0; i < katzDeliLine.length; i++)
  {
    list[i] = `${i}. ${katzDeliLine[i]}`;
  }
  
  var iterator = list.values();
  
  return `The line is currently: ${list.values()}`;
}