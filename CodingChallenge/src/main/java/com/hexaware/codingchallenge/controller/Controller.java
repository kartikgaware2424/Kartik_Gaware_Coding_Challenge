package com.hexaware.codingchallenge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.codingchallenge.dto.PlayerDTO;
import com.hexaware.codingchallenge.entity.Player;
import com.hexaware.codingchallenge.exception.PlayerNotFoundException;
import com.hexaware.codingchallenge.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/player")
public class Controller {
	
	@Autowired
	IPlayerService service;
	
	@PostMapping("/add")
	public Player insertPlayer(@Valid  @RequestBody PlayerDTO playerDTO)
	{
		return service.addPlayer(playerDTO);
	}
	
	@GetMapping("/getAll")
	public List<Player> getPlayers()
	{
		return service.getAllPlayer();
	}
	
	@GetMapping("/getById/{playerId}")
	public Player fetchPlayerById(@PathVariable int playerId) throws PlayerNotFoundException
	{
		return service.getPlayerById(playerId);
	}
	
	@PutMapping("/update/{playerId}")
	public Player updatePlayer(@PathVariable int playerId, @RequestBody PlayerDTO playerDTO) throws PlayerNotFoundException
	{
		return service.updatePlayerById(playerId,playerDTO);
	}
	
	@DeleteMapping("/delete/{playerId}")
	public String deletePlayer(@PathVariable int playerId)
	{
		return service.deletePlayerById(playerId);
	}
	
	

}
