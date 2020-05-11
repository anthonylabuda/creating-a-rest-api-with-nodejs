# 11: Adding User Signup

**Process Flow**:

- Client sends auth data to the Server
- Server returns a JWT token
- Client stores JWT token
    - JWT token is sent on all subsequent requests to the Server for verification

**JWT Token**:

- JSON data
    - Expiry
    - Information about logged in user
    - Issuer
    - Signature
- Signature contains a piece of data that can be verified on the Server
    - Uses Private/Public key encryption to ensure security

[< back](../../README.md)
