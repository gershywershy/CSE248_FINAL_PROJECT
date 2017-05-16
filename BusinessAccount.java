
public class BusinessAccount {

	private Business[] businesses;
	private int count;

	public BusinessAccount(int bagSize) {
		businesses = new Business[bagSize];
		count = 0;
	}

	public void add(Business business) {
		businesses[count++] = business;
	}

	public Business findByZip(String zip) {
		int i = -1;
		for (i = 0; i < count; i++) {
			if (businesses[i].getZipCode().equals(zip)) {
				break;
			}
		}

		if (i == count) {
			return null;
		} else {
			return businesses[i];
		}
	}

	public Business removeBySerialNum(String serialNumb) {
		int i = -1;
		for (i = 0; i < count; i++) {
			if (businesses[i].getSerialNumber().equals(serialNumb)) {
				break;
			}
		}

		if (i == count) {
			return null;
		} else {
			Business temp = businesses[i];
			for (int j = i; j < count; j++) {
				businesses[j] = businesses[j + 1];
			}
			count--;
			return temp;
		}
	}
}
