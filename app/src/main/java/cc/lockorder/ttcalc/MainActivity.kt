package cc.lockorder.ttcalc

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import kotlinx.android.synthetic.main.exchange_rate_item.view.*
import java.math.BigDecimal
import java.util.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val exchangeRates = ExchangeRateService.fetch()
        val recyclerView : RecyclerView = findViewById(R.id.rateListView)
        recyclerView.setHasFixedSize(true)
        recyclerView.adapter = ExchangeRateAdapter(exchangeRates)
    }
}

object ExchangeRateService {

    fun fetch() : List<ExchangeRate> {
        // Delegate to NDK to fetch rate
        return listOf(
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("GBP"), BigDecimal.valueOf(10.05))
        )
    }
}

// ---------------------------------------------------------------------------------------------------
//                                  Exchange Rate Section
// ---------------------------------------------------------------------------------------------------

data class ExchangeRate(val currency: Currency, val rate: BigDecimal)

class ExchangeRateAdapter(private val exchangeRates: List<ExchangeRate> = emptyList())
    : RecyclerView.Adapter<ExchangeRateAdapter.ViewHolder>() {

    override fun onCreateViewHolder(p0: ViewGroup, p1: Int): ViewHolder {
        val view : View = LayoutInflater.from(p0.context).inflate(R.layout.exchange_rate_item, p0, false)
        view.calculateExchangeRateButton.setOnClickListener { b ->
            TODO("Delegate to field component")
        }
        return ViewHolder(view)
    }

    override fun onBindViewHolder(p0: ViewHolder, p1: Int) {
        p0.nameTextView.text = exchangeRates[p1].currency.currencyCode.plus("@").plus(exchangeRates[p1].rate)
    }

    override fun getItemCount(): Int {
        return exchangeRates.count()
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var nameTextView: TextView = itemView.findViewById(R.id.exchangeRateTextView)
    }
}