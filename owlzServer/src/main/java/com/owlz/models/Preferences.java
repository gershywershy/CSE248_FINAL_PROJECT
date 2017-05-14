package com.owlz.models;

import java.util.ArrayList;
import java.util.List;

public class Preferences {
	
	List<Music> music = new ArrayList<Music>();
	List<Theme> themes = new ArrayList<Theme>();
	
	public List<Music> getAllMusic(){
		return music;
	}
	
	public List<Theme> getAllThemes(){
		return themes;
	}
	
	public void addMusicType(Music type){
		music.add(type);
	}
	
	public void addThemeType(Theme type){
		themes.add(type);
	}
	
	public void setAllMusic(List<Music> music){
		this.music = music;
	}
	
	public void setAllThemes(List<Theme> themes){
		this.themes = themes;
	}
	
	public boolean searchMusic(Music type){
		return music.contains(type);
	}
	
	public boolean searchThemes(Theme type){
		return themes.contains(type);
	}
	
	

}
