# Likeness API v1 Documentation

Welcome to the Likeness API v1 documentation. Likeness API allows you to compare the similarity between two texts. To use this API, you need to sign in with your Google or GitHub account, generate an API key, and include it in the headers of your requests. This API is built using Next.js, TypeScript, Tailwind CSS, Clerk, Redux, MongoDB, Prisma.

## Table of Contents

1. [Authentication](#authentication)
   - [Google Login](#google-login)
   - [GitHub Login](#github-login)
   - [Generating an API Key](#generating-an-api-key)
   - [Revoking an API Key](#revoking-an-api-key)
2. [Endpoint](#endpoint)
   - [POST /api/v1/likeness](#post-apiv1likeness)
3. [Request](#request)
4. [Response](#response)
5. [Example](#example)
6. [Error Codes](#error-codes)

## Authentication

### Google Login

To use the Likeness API, you can sign in with your Google account. This authentication process ensures that your access to the API is secure.

### GitHub Login

Alternatively, you can also sign in with your GitHub account to access the API.

### Generating an API Key

After successfully signing in with either Google or GitHub, you can generate an API key. This API key is required to make requests to the API.

### Revoking an API Key

If you wish to revoke an API key for security reasons or any other purpose, you can do so from your Likeness API account settings.

## Endpoint

### POST /api/v1/likeness

This endpoint is used to compare the similarity between two text strings. You need to include the following parameters in the request body:

- `text1`: The first text string for comparison.
- `text2`: The second text string for comparison.

#### Request Headers

To authenticate your request, include your API key in the headers of your request.

```http
Authorization: YOUR_API_KEY
```

#### Request Body

```json
{
  "text1": "This is the first text for comparison.",
  "text2": "This is the second text for comparison."
}
```

### Response

Upon making a valid request, the Likeness API will respond with a status code and a JSON object containing the similarity score. The similarity score is a floating-point number between 0 and 1, where 0 indicates no similarity, and 1 indicates identical text.

#### Successful Response

- `HTTP Status Code: 200`

```json
{
  "message": "Success",
  "likeness": 0.7
}
```

### Example

Here's an example of how to use the Likeness API to compare two text strings using JavaScript:

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://likeness-api.vercel.app/api/v1/likeness',
  data: {
    text1: 'First text',
    text2: 'Second text',
  },
  headers: {
    Authorization: 'YOUR_API_KEY',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

Make sure to replace `'YOUR_API_KEY'` with your actual API key.

## Error Codes

The Likeness API may return the following error codes:

- `HTTP Status Code: 400`

```json
{
  "message": "Bad Request. Missing a required parameter"
}
```

- `HTTP Status Code: 401`

```json
{
  "message": "Unauthorized. Missing API Key"
}
```

- `HTTP Status Code: 403`

```json
{
  "message": "Forbidden"
}
```

That's it! You should now have all the information you need to use the Likeness API v1. If you have any further questions or encounter any issues, feel free to reach out to our support team.
