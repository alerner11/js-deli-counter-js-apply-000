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
  
  var status = "The line is currently:"
  
  for (let i = 0; i < katzDeliLine.length - 1; i++)
  {
    status = status.concat(` ${i+1}. ${katzDeliLine[i]},`);
  }
  
  status = status.concat(` ${katzDeliLine.length-1}. ${katzDeliLine[katzDeliLine.length-1]}`);
  
  return status;  
}