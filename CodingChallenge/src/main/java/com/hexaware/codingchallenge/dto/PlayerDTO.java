package com.hexaware.codingchallenge.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PlayerDTO {
	@Min(value = 101)
	@Max(value = 999)
	private int playerId;

	@NotEmpty
	@Size(min = 3, max = 30, message = "Player name must be between 3 and 30 characters")
	private String playerName;

	@Min(value = 1)
	@Max(value = 999)
	private int jerseyNumber;

	@NotNull
	@Pattern(regexp = "^(Batsman|Bowler|Keeper|All Rounder)$")
	private String role;
	
	@NotNull
	private int totalMatches;

	@Size(min = 2, max = 50, message = "Team name must be between 2 and 50 characters")
	private String teamName;

	@NotNull
	@Pattern(regexp = "^(Maharashtra|Tamil Nadu|Kerala|Gujarat|Rajasthan)$")
	private String state;

	@Size(min = 3, max = 50, message = "Description must be between 10 and 50 characters")
	private String description;

}
