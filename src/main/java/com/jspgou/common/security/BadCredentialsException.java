package com.jspgou.common.security;

public class BadCredentialsException extends AuthenticationException {
    public BadCredentialsException() {
    }

    public BadCredentialsException(String msg) {
        super(msg);
    }
}

