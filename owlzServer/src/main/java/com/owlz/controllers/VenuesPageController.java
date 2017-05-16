package com.owlz.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.owlz.testModels.VenueTest;

@Controller
@RequestMapping("/funOwlVenues")
public class VenuesPageController {
	
	private String gDesc = "Some really cool venue description. This is the best place ever or something like that.";
	private String gSD = "Wow our club is so cool! You should totally come here for the following reasons: we are a club. That's convincing right? Yeah I thought so. See you soon.";
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "funOwlVenues"; //returns string from template file
	}
	
	@RequestMapping(value="/search/{searchText}", method=RequestMethod.GET)
	public @ResponseBody List<VenueTest> byParameter(@PathVariable String searchText) {
		System.out.println(searchText);
		
		VenueTest v1 = new VenueTest();
		v1.setDescription("ABOUT CIELO" + "<br>" +
                "Cielo is a state-of-the-art space in downtown’s ultra chic Meat Packing District that provides sophisticated" +
                "fans of electronic music with a specialized space, tailored to their tastes. It is a haven for individuals" +
                "seeking culturally rich nightlife with neither the hassles of large clubs nor the elitism of upscale lounges" +
                "with too many VIP rooms. Once you are in Cielo, there will be no more ropes, checkpoints, or rules. For more" +
                "than 12 years, Cielo has stayed true to these initiatives and established itself as a legendary name in New York" + "<br>" + "<br>" +
                "City’s dance music underground." +

                "Cielo goes back to basics: the best DJs, a strong door, impeccable service, stunning decor and lighting, skillfully" +
                "designed acoustics and a Funktion One soundsystem that will blow the socks off even the most fastidious audiophile." +
                "The sunken dancefloor is surrounded by banquettes decked out in brown and beige suede with a range of intelligent" +
                "lighting effects to enhance the intimate design; the stylish look is inspired by the timeless 70’s aesthetic." + "<br>" + "<br>" +

                "Conceived in 2003, Cielo is the brainchild of co-owner Nicolas Matar. A DJ for the past 20 years, Nicolas was" +
                "most notably known for his residency at the infamous Pacha Nightclub in Ibiza. Nicolas played in the funky room" +
                "or “El Cielo” and credits those years as the inspiration for Cielo and his eventual return to New York. For" +
                "over a decade, Cielo has remained focused on maintaining high quality service and providing an experience unlike" +
                "any other. As demonstrated by the unprecedented number of awards and nominations the club currently boasts, Cielo" +
                "has established itself as an international brand with an edict of cutting-edge electronic music. In addition to" +
                "its accolades, Cielo has featured more top international DJs than any other club in North America since its opening." +
                "DJs such as Luciano, David Guetta and Sven Vath passed through Cielo doors before they were the kingpins they are today." + "<br>" + "<br>" +

                "See you on the dancefloor…");
		v1.setTitle("Ceilo");
		v1.setShortDescription("Cielo is a state-of-the-art space in downtown’s ultra chic Meat Packing District that provides sophisticated fans of electronic music with a specialized space," +
                				"tailored to their tastes. It is a haven for individuals seeking culturally rich nightlife with neither the hassles of large clubs nor the elitism of upscale" +
								" lounges with too many VIP rooms.");
		v1.setPhoto("http://www.clothingtowear.com/pictures/421/421-nyc-nightclubs-c2a40d1.jpg");
		
		VenueTest v2 = new VenueTest();
		v2.setDescription(gDesc);
		v2.setTitle("Reign");
		v2.setShortDescription(gSD);
		v2.setPhoto("https://static1.squarespace.com/static/55b6dd6fe4b06f1beaf4d6be/t/57fed45c725e25e38f444195/1476318303556/");
		
		VenueTest v3 = new VenueTest();
		v3.setDescription(gDesc);
		v3.setTitle("Solution");
		v3.setShortDescription(gSD);
		v3.setPhoto("https://i.ytimg.com/vi/JWYhCWF2Anc/maxresdefault.jpg");
		
		VenueTest v4 = new VenueTest();
		v4.setDescription(gDesc);
		v4.setTitle("Story");
		v4.setShortDescription(gSD);
		v4.setPhoto("https://s-media-cache-ak0.pinimg.com/736x/af/ac/93/afac93134bf05f1e90f0432d4cd6f446.jpg");
		
		
		List<VenueTest> venues = new ArrayList<VenueTest>();
		venues.addAll(Arrays.asList(v1, v2, v3, v4));
		
		
	    return venues;
	}
}
