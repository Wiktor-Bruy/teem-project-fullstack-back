export async function authenticate(req, res, next) {
  console.log('Middlevare authenticate success');
  next();
}
