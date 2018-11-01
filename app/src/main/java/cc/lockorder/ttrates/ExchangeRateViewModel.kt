package cc.lockorder.ttrates

import android.arch.lifecycle.ViewModel;
import java.math.BigDecimal
import java.util.*

class ExchangeRateViewModel : ViewModel() {

    fun fetch() : List<RateEntry> = listOf(
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.ONE, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895))
    )
}
