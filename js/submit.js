const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const prompt = document.querySelector('#prompt').value;
  const model = document.querySelector('#model').value;
  const temperature = document.querySelector('#temperature').value;
  const maxLength = document.querySelector('#max-length').value;
  
  const url = 'https://api.openai.com/v1/engines/' + model + '/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + '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',
  };
  const data = {
    prompt: prompt,
    max_tokens: maxLength,
    temperature: temperature,
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
  const json = await response.json();
  
  output.textContent = json.choices[0].text;
});
