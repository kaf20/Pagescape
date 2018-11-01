package cc.lockorder.ttrates.shop

import android.arch.lifecycle.ViewModelProviders
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.AsyncTask
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import cc.lockorder.ttrates.R
import kotlinx.android.synthetic.main.shop_fragment.*
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.TimeUnit
import java.util.concurrent.TimeoutException


class ShopFragment : Fragment() {

    companion object {
        fun newInstance() = ShopFragment()
    }

    private lateinit var viewModel: ShopViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.shop_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(ShopViewModel::class.java)

        val task = ImageLoadingTask().execute()

        try {
            shop_image_view.setImageBitmap(task.get(5000, TimeUnit.MILLISECONDS))
        } catch (ex: TimeoutException) {}
//        description_text_view.text = Html.fromHtml("Shop is in Central")
    }

    class ImageLoadingTask: AsyncTask<Void, Int, Bitmap>() {

        override fun doInBackground(vararg params: Void?): Bitmap? {
            with(URL("https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg").openConnection() as HttpURLConnection) {
                return BitmapFactory.decodeStream(inputStream)
            }
        }
    }
}
