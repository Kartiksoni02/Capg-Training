package com.capg.springboot.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;

@Component
public class JwtUtil {

    private final String SECRET = "smartcouriersecretkeysmartcouriersecretkey";

    private Key getSignKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSignKey())
                    .build()
                    .parseClaimsJws(token);

            return true;

        } catch (ExpiredJwtException e) {
            System.out.println("Token expired");
            e.printStackTrace();

        } catch (UnsupportedJwtException e) {
            System.out.println("Unsupported token");
            e.printStackTrace();

        } catch (MalformedJwtException e) {
            System.out.println("Malformed token");
            e.printStackTrace();

        } catch (SecurityException e) {
            System.out.println(" Invalid signature");
            e.printStackTrace();

        } catch (Exception e) {
            System.out.println("Invalid token");
            e.printStackTrace();
        }

        return false;
    }
}