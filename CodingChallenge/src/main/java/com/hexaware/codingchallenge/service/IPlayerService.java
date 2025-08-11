package com.hexaware.codingchallenge.service;

import java.util.List;

import com.hexaware.codingchallenge.dto.PlayerDTO;
import com.hexaware.codingchallenge.entity.Player;
import com.hexaware.codingchallenge.exception.PlayerNotFoundException;

public interface IPlayerService {

	public List<Player> getAllPlayer();

	public Player addPlayer(PlayerDTO playerDTO);

	public Player getPlayerById(int playerId) throws PlayerNotFoundException;

	public Player updatePlayerById(int playerId, PlayerDTO playerDTO) throws PlayerNotFoundException;

	public String deletePlayerById(int playerId);

}
