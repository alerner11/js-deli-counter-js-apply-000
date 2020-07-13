function takeANumber(line, name)
{
  line.push(name);
// adds name(s) to array  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line)
{
  if (line.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  
  var serving = line[0];
  line.shift();
  return `Currently serving ${serving}.`;
  
}

function currentLine(line)
{
  if (line.length === 0)
  {
    return "The line is currently empty."
  }
  
  var status = "The line is currently:"
  
  for (let i = 0; i < line.length - 1; i++)
  {
    status = status.concat(` ${i + 1}. ${line[i]},`);
  }
  
  status = status.concat(` ${line.length}. ${line[line.length-1]}`);
  
  return status;  
}