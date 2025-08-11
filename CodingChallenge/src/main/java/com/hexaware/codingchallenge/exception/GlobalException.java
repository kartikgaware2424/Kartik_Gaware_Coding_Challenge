package com.hexaware.codingchallenge.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(reason = "Input validation failed", code = HttpStatus.BAD_REQUEST)
	public void handleValidations() {

	}

	@ExceptionHandler(PlayerNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String handlePlayerNotFoundException(PlayerNotFoundException e) {
		return e.getMessage();
	
		

	}

}
