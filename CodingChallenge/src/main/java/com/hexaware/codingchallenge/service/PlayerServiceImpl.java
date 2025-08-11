package com.hexaware.codingchallenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.codingchallenge.dto.PlayerDTO;
import com.hexaware.codingchallenge.entity.Player;
import com.hexaware.codingchallenge.exception.PlayerNotFoundException;
import com.hexaware.codingchallenge.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService {
	@Autowired
	PlayerRepository playerRepo;

	@Override
	public List<Player> getAllPlayer() {

		return playerRepo.findAll();
	}

	@Override
	public Player addPlayer(PlayerDTO playerDTO) {

		Player player = new Player();
		player.setPlayerId(playerDTO.getPlayerId());
		player.setPlayerName(playerDTO.getPlayerName());
		player.setJerseyNumber(playerDTO.getJerseyNumber());
		player.setRole(playerDTO.getRole());
		player.setTotalMatches(playerDTO.getTotalMatches());
		player.setTeamName(playerDTO.getTeamName());
		player.setState(playerDTO.getState());
		player.setDescription(playerDTO.getDescription());

		return playerRepo.save(player);
	}

	@Override
	public Player getPlayerById(int playerId) throws PlayerNotFoundException {

		return playerRepo.findById(playerId).orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + playerId));
	}

	@Override
	public Player updatePlayerById(int playerId, PlayerDTO playerDTO) throws PlayerNotFoundException {
		Player existingPlayer = playerRepo.findById(playerId).orElseThrow(() -> new PlayerNotFoundException("Player not found with ID: " + playerId));
        existingPlayer.setPlayerName(playerDTO.getPlayerName());
		existingPlayer.setJerseyNumber(playerDTO.getJerseyNumber());
		existingPlayer.setRole(playerDTO.getRole());
		existingPlayer.setTotalMatches(playerDTO.getTotalMatches());
		existingPlayer.setTeamName(playerDTO.getTeamName());
		existingPlayer.setState(playerDTO.getState());
		existingPlayer.setDescription(playerDTO.getDescription());

		return playerRepo.save(existingPlayer);
	}

	@Override
	public String deletePlayerById(int playerId) {

	     playerRepo.deleteById(playerId);
		return "Player Delete Successfully!!!";
	}

}
